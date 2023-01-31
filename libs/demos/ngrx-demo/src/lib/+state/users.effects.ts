import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { UsersApiService } from '@ngrx-demos-shared';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetch, navigation } from '@nrwl/angular';
import { map } from 'rxjs';
import { NgrxDemoPageComponent } from '../ngrx-demo-page/ngrx-demo-page.component';

import { DemoPageActions, UsersApiActions } from './users.actions';

@Injectable()
export class UsersEffects {
  private actions$ = inject(Actions);

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      // listens for the routerNavigation action from @ngrx/router-store
      navigation(NgrxDemoPageComponent, {
        run: (activatedRouteSnapshot: ActivatedRouteSnapshot) => {
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

  // loadUsers$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(DemoPageActions.enter),
  //     fetch({
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
      ofType(DemoPageActions.addUserClicked),
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
