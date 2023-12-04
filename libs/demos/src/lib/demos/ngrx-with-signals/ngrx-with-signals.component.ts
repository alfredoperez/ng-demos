import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PageContentComponent } from '@ng-demos/shared/ui/general';
import { UserModalComponent, UserTableComponent } from '@ng-demos/users/domain';
import { lastValueFrom } from 'rxjs';
import { ManageUsersFacade } from './application';
import { Companies } from './models/user';

@Component({
  selector: 'demos-ngrx-with-signals',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    PageContentComponent,
    UserTableComponent,
    MatDialogModule,
  ],
  templateUrl: './ngrx-with-signals.component.html',
  styleUrls: ['./ngrx-with-signals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgrxWithSignalsComponent {
  /**
   * Observable with a flag when it is loading data
   */
  public isLoading = this.manageUsersFacade.isLoading;

  /**
   * Observable with a flag when the data was loaded
   */
  public isLoaded = this.manageUsersFacade.isLoaded;

  /**
   * Observable with a flag when it is loading data
   */
  public error = this.manageUsersFacade.error;

  selectedCompany = signal<string>('');

  /**
   * Observable of the list of users
   */
  public filteredUsers = computed(() => {
    const users = this.manageUsersFacade.users();
    const company = this.selectedCompany();

    return company === ''
      ? users
      : users.filter((user) => user.company === company);
  });

  //   combineLatest([
  //     this.manageUsersFacade.users$,
  //     this.selectedCompanyAction$,
  //   ]).pipe(
  //     map(([users, company]) =>
  //       company === '' ? users : users.filter((user) => user.company === company)
  //     )
  //   );
  // }

  constructor(
    private manageUsersFacade: ManageUsersFacade,
    private dialog: MatDialog,
  ) {
    this.manageUsersFacade.enterPage();
  }

  /**
   * Opens a modal to add a new user.
   * Dispatches an action to save the user once the dialog is closed
   */
  public async addUser(): Promise<void> {
    const user = await lastValueFrom(
      this.dialog
        .open(UserModalComponent, { height: '400px', width: '600px' })
        .afterClosed(),
    );

    if (!user) {
      return;
    }

    this.manageUsersFacade.addUser(user);
  }

  protected readonly Companies = Companies;

  selectCompany(value: Event) {
    const newValue = (value.target as HTMLSelectElement).value;
    this.selectedCompany.set(newValue);
  }
}
