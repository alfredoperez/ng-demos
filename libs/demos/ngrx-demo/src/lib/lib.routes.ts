import { Route } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';
import { UsersEffects } from './+state/users.effects';
import { usersFeature } from './+state/users.reducer';
import { NgrxDemoPageComponent } from './ngrx-demo-page/ngrx-demo-page.component';

export const ngrxDemoRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: NgrxDemoPageComponent,
    providers: [provideState(usersFeature), provideEffects(UsersEffects)],
  },
];
