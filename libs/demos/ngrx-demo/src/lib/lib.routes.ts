import { Route } from '@angular/router';
import { NgrxDemoPageComponent } from './ngrx-demo-page/ngrx-demo-page.component';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import * as fromUsers from './+state/users.reducer';
import { UsersEffects } from './+state/users.effects';

export const ngrxDemoRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: NgrxDemoPageComponent,
    providers: [
      provideState(fromUsers.USERS_FEATURE_KEY, fromUsers.usersReducer),
      provideEffects(UsersEffects),
    ],
  },
];
