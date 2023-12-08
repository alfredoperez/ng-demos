import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  fadeInUp400ms,
  PageContentComponent,
} from '@ng-demos/shared/ui/general';
import { UserTableComponent } from '@ng-demos/users/domain';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { UsersService } from './services/users.service';

@Component({
  selector: 'demos-api-service-demo',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    PageContentComponent,
    UserTableComponent,
    AgGridModule,
  ],
  templateUrl: './api-service-demo.component.html',
  styleUrls: ['./api-service-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInUp400ms],
})
export class ApiServiceDemoComponent {
  isLoading = signal<boolean>(true);
  isLoaded = signal<any | null>(null);

  usersService = inject(UsersService);

  users = toSignal(this.usersService.getAll({ page: 1, limit: 10 }));

  public columnDefs: Array<ColDef> = [
    { field: 'name' },
    { field: 'age' },
    { field: 'email' },

    { field: 'company' },
    { field: 'title' },
    { field: 'createdAt' },
    { field: 'updatedAt' },
  ];
  addUser() {}

  error() {}
}
