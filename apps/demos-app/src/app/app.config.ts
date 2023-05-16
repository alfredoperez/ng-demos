import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from '@angular/core';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { UserEffects, usersFeature } from '@ng-demos/users/domain';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {
  UserSignalsEffects,
  usersSignalsFeature,
} from '../../../../libs/demos/src/lib/demos/ngrx-with-signals/+state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      {
        path: 'home',
        pathMatch: 'full',
        loadComponent: () =>
          import('@ng-demos/home/feature-landing').then(
            (x) => x.FeatureLandingComponent
          ),
      },
      {
        path: 'users',
        pathMatch: 'full',
        loadComponent: () =>
          import('@ng-demos/users/feature-manage').then(
            (x) => x.FeatureManageComponent
          ),
        providers: [provideState(usersFeature), provideEffects(UserEffects)],
      },
      {
        path: 'signals-simple-store',
        pathMatch: 'full',
        loadComponent: () =>
          import('@ng-demos/demos').then((x) => x.SignalsSimpleStoreComponent),
      },
      {
        path: 'ngrx-with-signals',
        pathMatch: 'full',
        loadComponent: () =>
          import('@ng-demos/demos').then((x) => x.NgrxWithSignalsComponent),
        providers: [
          provideState(usersSignalsFeature),
          provideEffects(UserSignalsEffects),
        ],
      },
    ]),
    provideAnimations(),
    provideStore(
      { router: routerReducer },
      {
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    provideRouterStore(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
    provideEffects(),
    importProvidersFrom(BrowserAnimationsModule),
  ],
};
