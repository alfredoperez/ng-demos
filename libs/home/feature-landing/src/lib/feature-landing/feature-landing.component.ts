import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng-demos-feature-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature-landing.component.html',
  styleUrls: ['./feature-landing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureLandingComponent {}
