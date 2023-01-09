import { Component } from '@angular/core';

@Component({
  selector: 'ng-demos-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  routes = [
    { path: 'ngrx-demo', title: 'NgRx Demo' },
    { path: 'atomic-state-demo', title: 'Atomic State Demo' },
  ];
  isMobileMenuOpen = false;
}
