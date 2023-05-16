import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createFeature, createReducer, on } from '@ngrx/store';
import { CallState, LoadingState } from '../models/entity-state';
import { User } from '../models/user';
import { ManageFeatureActions } from './actions/manage-feature.actions';
import { UsersApiActions } from './actions/user-api.actions';

export interface UsersState extends EntityState<User> {
  callState: CallState;
}
export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialUsersState: UsersState = adapter.getInitialState({
  callState: LoadingState.INIT,
});

export const usersSignalsFeature = createFeature({
  name: 'UsersSignals',
  reducer: createReducer(
    initialUsersState,
    on(ManageFeatureActions.enter, (state) => ({
      ...state,
      callState: LoadingState.LOADING,
    })),
    on(UsersApiActions.loadSuccess, (state, { users }) =>
      adapter.setAll(users || [], {
        ...state,
        callState: LoadingState.LOADED,
      })
    ),
    on(UsersApiActions.loadFailure, (state, { error }) => ({
      ...state,
      callState: { errorMessage: error },
    })),
    on(UsersApiActions.addUser, (state) => ({
      ...state,
      callState: LoadingState.LOADING,
    })),
    on(UsersApiActions.addUserSuccess, (state, { user }) =>
      adapter.addOne(user, {
        ...state,
        callState: LoadingState.LOADED,
      })
    ),
    on(UsersApiActions.addUserFailure, (state, { error }) => ({
      ...state,
      callState: { errorMessage: error },
    }))
  ),
});
