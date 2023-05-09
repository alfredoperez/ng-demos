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
      path: 'home',
      title: 'Home',
    },
    {
      path: 'signals-simple-store',
      title: 'Signals (Simple Store)',
    },
    {
      path: 'users',
      title: 'NgRx(Users)',
    },
  ];
  isMobileMenuOpen = false;
}
