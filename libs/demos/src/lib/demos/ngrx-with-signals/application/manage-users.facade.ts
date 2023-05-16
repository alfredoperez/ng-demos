import { Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { ManageFeatureActions } from '../+state/actions/manage-feature.actions';
import { UsersState } from '../+state/user.reducer';
import {
  selectAllUsers,
  selectError,
  selectIsLoaded,
  selectIsLoading,
} from '../+state/user.selectors';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class ManageUsersFacade {
  users = this.store.selectSignal(selectAllUsers);
  users$ = this.store.select(selectAllUsers);

  isLoaded = toSignal(this.store.select(selectIsLoaded));
  isLoading = this.store.selectSignal(selectIsLoading);
  error = this.store.selectSignal(selectError);

  constructor(private store: Store<UsersState>) {}

  /**
   *
   */
  enterPage() {
    this.store.dispatch(ManageFeatureActions.enter());
  }
  addUser(user: User) {
    this.store.dispatch(ManageFeatureActions.addUserClicked({ user }));
  }
}
