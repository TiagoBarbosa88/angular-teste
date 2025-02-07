import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-form',
  imports: [ReactiveFormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent {
  // @Output() submitForm = new EventEmitter<Post>()
  submitForm = output<Post>();

  form = new FormGroup({
    title: new FormControl('', { nonNullable: true }),
    body: new FormControl('', { nonNullable: true }),
  })
}
