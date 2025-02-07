import { Component, input } from '@angular/core';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent {
  readonly post = input.required<Post>();
}
