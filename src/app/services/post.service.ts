import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[] = [
    {title: 'First Post', content: 'First Post Description'},
    {title: 'Second Post', content: 'Second Post Description'},
    {title: 'Third Post', content: 'Third Post Description'},
  ]

  addPost(title: string, content: string) {
    const post = {title:title ,content:title}
    this.posts.push(post)
    console.log(this.posts);
  }

  getPosts() {
    return this.posts

  }
}
