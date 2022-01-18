import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostService} from 'src/app/services/post.service';
import {Subscription} from "rxjs";


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[] = []
  private postsSub: Subscription

  constructor(private postService: PostService) {
  }


  ngOnInit(): void {
    this.postService.getPosts()
    this.postsSub = this.postService.getPostUpdateListener().subscribe((posts: Post[]) => {
      this.posts = posts
    })
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe()
  }
}
