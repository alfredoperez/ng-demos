import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@ng-demos/ui';
import { AgGridModule } from 'ag-grid-angular';

@Component({
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterModule, AgGridModule],
  selector: 'ng-demos-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  routes = [
    {
      path: 'ngrx-demo',
      title: 'NgRx Entity State',
      providers: [],
    },
    { path: 'atomic-state-demo', title: 'Atomic State' },
  ];
  isMobileMenuOpen = false;
}
