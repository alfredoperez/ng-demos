import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { ngrxDemoRoutes } from '@ng-demos/ngrx-demo';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', pathMatch: 'full', redirectTo: 'ngrx-demo' },
      {
        path: 'ngrx-demo',
        children: ngrxDemoRoutes,
      },
    ]),
    provideAnimations(),
    provideStore(
      {},
      {
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    provideEffects(),
    provideStoreDevtools(),
    provideRouterStore(),
    provideState({
      router: routerReducer,
    }),
  ],
}).catch((err) => console.error(err));
