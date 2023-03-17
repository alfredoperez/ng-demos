import { isDevMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { ngrxDemoRoutes } from '@ng-demos/ngrx-demo';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
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
    provideStore({ router: routerReducer }, {
        runtimeChecks: {
            strictActionImmutability: true,
            strictStateImmutability: true,
        },
    }),
    provideRouterStore(),
    provideStoreDevtools({
        maxAge: 25,
        logOnly: !isDevMode(),
        autoPause: true,
        trace: false,
        traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
    provideEffects(),
    importProvidersFrom(BrowserAnimationsModule)
],
}).catch((err) => console.error(err));
