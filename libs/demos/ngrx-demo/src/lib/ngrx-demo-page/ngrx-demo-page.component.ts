import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ModalService, PageContentComponent } from '@ng-demos/ui';
import {
  User,
  UserModalComponent,
  UserModalComponent as UserModalComponentType,
  UsersApiService,
  UserTableComponent,
} from '@ngrx-demos-shared';
import { Store } from '@ngrx/store';
import { lastValueFrom, Observable } from 'rxjs';
import { DemoPageActions } from '../+state/users.actions';
import { UsersState } from '../+state/users.reducer';
import {
  selectAllUsers,
  selectError,
  selectIsLoaded,
  selectIsLoading,
} from '../+state/users.selectors';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    PageContentComponent,
    UserTableComponent,
    MatDialogModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './ngrx-demo-page.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgrxDemoPageComponent {
  /**
   * Observable of the list of users
   */
  public users$: Observable<Array<User>>;

  /**
   * Observable with a flag when it is loading data
   */
  public isLoading$: Observable<boolean>;

  /**
   * Observable with a flag when the data was loaded
   */
  public isLoaded$: Observable<boolean>;

  /**
   * Observable with a flag when it is loading data
   */
  public error$: Observable<string | null>;

  constructor(
    private usersApiService: UsersApiService,
    private modalService: ModalService<UserModalComponentType>,
    private store: Store<UsersState>,
    private dialog: MatDialog
  ) {
    this.store.dispatch(DemoPageActions.enter());

    this.users$ = this.store.select(selectAllUsers);
    this.isLoaded$ = this.store.select(selectIsLoaded);
    this.isLoading$ = this.store.select(selectIsLoading);
    this.error$ = this.store.select(selectError);
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

    this.store.dispatch(DemoPageActions.addUserClicked({ user }));
  }
}
