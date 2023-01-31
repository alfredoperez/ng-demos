import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@ng-demos/ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ButtonComponent,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'ngrx-demo' },
      {
        path: 'ngrx-demo',
        title: 'NgRx Demo',
        loadChildren: () =>
          import('@ng-demos/ngrx-demo').then((m) => m.NgrxDemoModule),
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
