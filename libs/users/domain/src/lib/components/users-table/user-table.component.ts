import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { fadeInUp400ms } from '@ng-demos/shared/ui/general';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { User } from '../../models/user';

@Component({
  standalone: true,
  selector: 'ngrx-demos-users-table',
  imports: [CommonModule, AgGridModule],
  templateUrl: './user-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
  animations: [fadeInUp400ms],
})
export class UserTableComponent {
  /**
   * The list of users to display
   */
  @Input()
  public users!: Array<User> | null;

  public columnDefs: Array<ColDef> = [
    { field: 'name' },
    { field: 'title' },
    { field: 'company' },
    { field: 'email' },
    { field: 'created' },
  ];
}
