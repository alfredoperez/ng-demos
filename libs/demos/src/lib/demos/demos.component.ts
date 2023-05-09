import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemosComponent {}
