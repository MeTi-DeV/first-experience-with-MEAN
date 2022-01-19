import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[] = []
  private postUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {
  }

  getPosts() {
    this.http.get<{ message: string, posts: Post[] }>("http://localhost:3000/api/posts").subscribe(
      (postData) => {
        this.posts = postData.posts
        this.postUpdated.next([...this.posts]);
      }
    )
  }
  getPostUpdateListener() {
    return this.postUpdated.asObservable();
  }
  addPost(title: string, content: string) {
    const post: Post = { id:(Math.random()+25).toString(36).substring(7),title: title,content: content}
    //comment 1 : here with HttpClient pass new data to backend as pos() method body that we save that in app.js
    // as post
    //this.http.post : first argument is server url and second is our new client values that user input that
    //subscribe : subscribe body will execute if server url is correctly or input values is correctly
    // and show them as post list
    this.http.post("http://localhost:3000/api/posts",post).subscribe(
      responseData => {
console.log(post)
        this.posts.push(post)
        this.postUpdated.next([...this.posts])
      }
    )

  }


}
