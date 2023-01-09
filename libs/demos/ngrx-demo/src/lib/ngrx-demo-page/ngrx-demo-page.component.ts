import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngrx-demo-page.component.html',
  styleUrls: ['./ngrx-demo-page.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgrxDemoPageComponent {}
