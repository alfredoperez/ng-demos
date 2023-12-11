import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  fadeInUp400ms,
  PageContentComponent,
} from '@ng-demos/shared/ui/general';
import { UserTableComponent } from '@ng-demos/users/domain';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { combineLatest, switchMap } from 'rxjs';
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
    MatPaginatorModule,
  ],
  templateUrl: './api-service-demo.component.html',
  styleUrls: ['./api-service-demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInUp400ms],
})
export class ApiServiceDemoComponent {
  isLoading = signal<boolean>(true);
  isLoaded = signal<any | null>(null);

  currentPage = signal<number>(1);
  pageSize = signal<number>(10);

  usersService = inject(UsersService);

  users = toSignal(
    combineLatest([
      toObservable(this.currentPage),
      toObservable(this.pageSize),
    ]).pipe(
      switchMap(([page, limit]) =>
        this.usersService.getList({ pagination: { page, limit } }),
      ),
    ),
    { initialValue: { total: 0, data: [] } },
  );
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

  onPageChange(pageEvent: PageEvent) {
    this.currentPage.set(pageEvent.pageIndex + 1);
    this.pageSize.set(pageEvent.pageSize);
  }
}
