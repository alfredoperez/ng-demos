import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@ng-demos/shared/ui/general';
import { AgGridModule } from 'ag-grid-angular';

@Component({
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterModule, AgGridModule],
  selector: 'ng-demos-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  routes = [
    {
      path: 'signals-simple-store',
      title: 'Signals (Simple Store)',
    },
    {
      path: 'users',
      title: 'NgRx(Users)',
    },
    {
      path: 'ngrx-with-signals',
      title: 'NgRx with Signals',
    },
    {
      path: 'defer-loading',
      title: 'Defer Loading',
    },
    {
      path: 'api-service-demo',
      title: 'API Service',
    },
  ];
  isMobileMenuOpen = false;
  collapseShow = 'hidden';

  toggleCollapseShow(classes: string) {
    this.collapseShow = classes;
  }
}
