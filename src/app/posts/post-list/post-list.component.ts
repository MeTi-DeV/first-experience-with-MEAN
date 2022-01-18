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
  //comment 2 : use Subscription to save our post list data and destroyable catch memory of this component
  private postsSub: Subscription

  constructor(private postService: PostService) {
  }


  ngOnInit(): void {
    this.posts = this.postService.getPosts()
    //comment 1 : this way save our list on memory if component not working correctly
    this.postsSub = this.postService.getPostUpdateListener().subscribe((posts: Post[]) => {
      this.posts = posts
    })
  }

  //comment 3 : for clean memory when component not execution
  ngOnDestroy() {
    this.postsSub.unsubscribe()
  }
}
