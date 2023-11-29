import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of, tap } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Mocks } from '../../defer-loading.mocks';

@Component({
  selector: 'demos-post-comments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.scss'],
})
export class PostCommentsComponent {
  comments$ = of(Mocks.data.comments).pipe(
    tap((comment) => console.log(`Loading Comments`)),
    delay(2000),
  );
}
