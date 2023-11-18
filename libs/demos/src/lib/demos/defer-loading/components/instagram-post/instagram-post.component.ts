import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PostCommentsComponent } from '../post-comments/post-comments.component';

@Component({
  selector: 'demos-instagram-post',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, PostCommentsComponent],
  templateUrl: './instagram-post.component.html',
  styleUrls: ['./instagram-post.component.scss'],
})
export class InstagramPostComponent {
  @Input() post: any;
  showComments = false;

  ngOnInit() {
    console.log('InstagramPostComponent: ngOnInit');
  }
}
