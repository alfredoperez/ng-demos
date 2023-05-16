import { inject, Injectable } from '@angular/core';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch } from '@nx/angular';
import { map } from 'rxjs';
import { UsersApiService } from '../services/users-api.service';
import { ManageFeatureActions } from './actions/manage-feature.actions';
import { UsersApiActions } from './actions/user-api.actions';

@Injectable()
export class UserSignalsEffects {
  private actions$ = inject(Actions);

  // loadUsers$ = createEffect(() =>
  //   this.actions$.pipe(
  //     // listens for the routerNavigation action from @ngrx/router-store
  //     navigation(FeatureManageComponent, {
  //       run: () => {
  //         return this.usersApiService
  //           .list()
  //           .pipe(map((users) => UsersApiActions.loadSuccess({ users })));
  //       },
  //       onError: (action, error) => {
  //         console.error('Error', error);
  //         return UsersApiActions.loadFailure({
  //           error:
  //             'Failed loading the list of users. Please contact your administrator',
  //         });
  //       },
  //     })
  //   )
  // );

  loadUserst$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ManageFeatureActions.enter),
      fetch({
        run: () => {
          return this.usersApiService
            .list()
            .pipe(map((users) => UsersApiActions.loadSuccess({ users })));
        },
        onError: (action, error) => {
          console.error('Error', error);
          return UsersApiActions.loadFailure({
            error:
              'Failed loading the list of users. Please contact your administrator',
          });
        },
      })
    )
  );

  loadFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UsersApiActions.loadFailure),
        map(() => {
          // setTimeout(
          //   () =>
          // this.snackBar.open('Error loading users!', 'Error', {
          //     duration: 2500,
          // }),
          //     0
          // );
        })
      ),
    { dispatch: false }
  );

  addUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ManageFeatureActions.addUserClicked),
      fetch({
        run: (action) => {
          return this.usersApiService.add(action.user).pipe(
            map((newUser) => {
              return UsersApiActions.addUserSuccess({ user: newUser });
            })
          );
        },
        onError: (action, error) => {
          console.error('Error', error);
          return UsersApiActions.addUserFailure({
            error: 'Failed adding a user. Please contact your administrator',
          });
        },
      })
    )
  );

  addUserFailure$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(UsersApiActions.addUserFailure),
        map(() => {
          // setTimeout(
          //   () =>
          //     this.snackBar.open('Error adding a user', 'Error', {
          //       duration: 2500,
          //     }),
          //   0
          // );
        })
      ),
    { dispatch: false }
  );

  constructor(private usersApiService: UsersApiService) {}
}
