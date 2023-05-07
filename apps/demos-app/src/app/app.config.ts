import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { provideState, provideStore } from '@ngrx/store';
import { UserEffects, usersFeature } from '@ng-demos/users/domain';
import { provideEffects } from '@ngrx/effects';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { provideStoreDevtools } from '@ngrx/store-devtools';
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
