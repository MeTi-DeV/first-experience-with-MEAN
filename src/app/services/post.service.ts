import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
//comment 1: add HttpClient also should add HttpClientModule in app.module.ts
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[] = []
  postUpdated = new Subject<Post[]>();
//comment 2 : create http as property to get data from backend
  constructor(private http: HttpClient) {
  }
  getPosts() {
//comment 3 : to show list of data that created in app.js and connect to backend address and fetch data to frontend
    this.http.get<{ message: string, posts: Post[] }>('http://localhost:3000/api/posts').subscribe(
      (postData) => {
        this.posts = postData.posts
      }
    )
  }

  addPost(title: string, content: string) {
    const post: Post = {id: '', title: title, content: title}
    this.posts.push(post)
    this.postUpdated.next([...this.posts])
    console.log(this.posts);
  }


  getPostUpdateListener() {
    return this.postUpdated.asObservable();
  }
}
