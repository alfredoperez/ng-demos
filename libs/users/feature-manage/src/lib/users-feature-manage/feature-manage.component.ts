import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { PageContentComponent } from '@ng-demos/shared/ui/general';
import {
  ManageUsersFacade,
  UserModalComponent,
  UserTableComponent,
} from '@ng-demos/users/domain';
import { lastValueFrom } from 'rxjs';

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
   * Observable of the list of users
   */
  public users$ = this.manageUsersFacade.users$;

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
}
