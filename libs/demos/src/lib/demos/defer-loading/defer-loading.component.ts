import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { InstagramPostComponent } from './components/instagram-post/instagram-post.component';
import { Mocks } from './defer-loading.mocks';

@Component({
  selector: 'demos-defer-loading',
  standalone: true,
  imports: [CommonModule, InstagramPostComponent],
  templateUrl: './defer-loading.component.html',
  styleUrls: ['./defer-loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeferLoadingComponent {
  posts$ = of(Mocks.data.instagramPosts).pipe(delay(1000));
}
