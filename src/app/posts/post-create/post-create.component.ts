import {Component, OnInit} from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';
import {PostService} from 'src/app/services/post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  title = new FormControl('', [Validators.required]);
  content = new FormControl('', [Validators.required]);

  constructor(private postService: PostService) {
  }
  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    } else {
      this.postService.addPost(form.value.title, form.value.content)
    }

    form.reset()
  }
  ngOnInit(): void {

  }

}
