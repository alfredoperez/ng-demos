import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PageContentComponent } from '@ng-demos/shared/ui/general';
import { User, UserTableComponent } from '@ng-demos/users/domain';

@Component({
  selector: 'demos-api-service-demo',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    PageContentComponent,
    UserTableComponent,
  ],
  templateUrl: './api-service-demo.component.html',
  styleUrls: ['./api-service-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApiServiceDemoComponent {
  isLoading = signal<boolean>(true);
  isLoaded = signal<any | null>(null);
  filteredUsers = signal<Array<User>>([]);
  addUser() {}

  error() {}
}
