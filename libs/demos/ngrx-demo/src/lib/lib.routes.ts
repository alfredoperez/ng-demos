import { Route } from '@angular/router';
import { NgrxDemoPageComponent } from './ngrx-demo-page/ngrx-demo-page.component';

export const ngrxDemoRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: NgrxDemoPageComponent },
];
