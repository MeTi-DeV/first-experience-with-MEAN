import {Injectable} from "@angular/core";
//comment 1 : Subject is a object from rxjs to more complex way to update Post list
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
  //comment 2 :create new variable and get Subject as value
  postUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts]
  }

  addPost(title: string, content: string) {
    const post = {title: title, content: title}
    this.posts.push(post)
    //comment 3: use .next() to update our list with new post that recived at line 23
    this.postUpdated.next([...this.posts])
    console.log(this.posts);
  }


//comment 4 : create new function and call postUpdated and get asObservable() to be able observable
// Post list
  getPostUpdateListener() {
    return this.postUpdated.asObservable();
  }
}
