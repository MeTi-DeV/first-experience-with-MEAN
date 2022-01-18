import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [
    {title: 'First Post', content: 'First Post Description'},
    {title: 'Second Post', content: 'Second Post Description'},
    {title: 'Third Post', content: 'Third Post Description'},
  ]
  postUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts]
  }

  addPost(title: string, content: string) {
    const post = {title: title, content: title}
    this.posts.push(post)
    this.postUpdated.next([...this.posts])
    console.log(this.posts);
  }


  getPostUpdateListener() {
    return this.postUpdated.asObservable();
  }
}
