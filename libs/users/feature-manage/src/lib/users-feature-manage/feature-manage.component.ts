import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { PageContentComponent } from '@ng-demos/shared/ui/general';
import {
  Companies,
  ManageUsersFacade,
  UserModalComponent,
  UserTableComponent,
} from '@ng-demos/users/domain';
import { BehaviorSubject, combineLatest, lastValueFrom, map } from 'rxjs';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    PageContentComponent,
    UserTableComponent,
    MatDialogModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './feature-manage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureManageComponent {
  /**
   * Observable with a flag when it is loading data
   */
  public isLoading$ = this.manageUsersFacade.isLoading$;

  /**
   * Observable with a flag when the data was loaded
   */
  public isLoaded$ = this.manageUsersFacade.isLoaded$;

  /**
   * Observable with a flag when it is loading data
   */
  public error$ = this.manageUsersFacade.error$;

  selectedCompany = new BehaviorSubject<string>('');
  selectedCompanyAction$ = this.selectedCompany.asObservable();

  /**
   * Observable of the list of users
   */
  public users$ = combineLatest([
    this.manageUsersFacade.users$,
    this.selectedCompanyAction$,
  ]).pipe(
    map(([users, company]) =>
      company === '' ? users : users.filter((user) => user.company === company)
    )
  );
  constructor(
    private manageUsersFacade: ManageUsersFacade,
    private dialog: MatDialog
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
        .afterClosed()
    );

    if (!user) {
      return;
    }

    this.manageUsersFacade.addUser(user);
  }

  selectCompany(value: Event) {
    const newValue = (value.target as HTMLSelectElement).value;
    this.selectedCompany.next(newValue);
  }

  protected readonly Companies = Companies;
}
