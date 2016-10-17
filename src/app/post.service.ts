import {Injectable} from '@angular/core';
import { Post } from './post.model';
//import { POSTS } from './posts.data';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class PostService{
    // For getting all posts
    private postUrl = 'app/posts';
    private headers = new Headers({'Content-Type': 'application/json'});

    private handleError(error: any): Promise<any> {
      // console.error('An error occurred', error); 
      return Promise.reject(error.message || error);
    }
        
    
    constructor(private http: Http){ }

    getPosts(): Promise<Post[]> {
    return this.http.get(this.postUrl)
               .toPromise()
               .then(response => response.json().data as Post[])
               .catch(this.handleError);
               
  }
       
    getPostById(id: number): Promise<Post> {
    return this.getPosts()
               .then(posts => posts.find(post => post.id === id));
  }
    update(post: Post): Promise<Post> {
      const url = `${this.postUrl}/${post.id}`;
      return this.http
    .put(url, JSON.stringify(post), {headers: this.headers})
    .toPromise()
    .then(() => post)
    .catch(this.handleError);
}

  delete(id: number): Promise<void> {
  const url = `${this.postUrl}/${id}`;
  return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
}

  create(post: Post): Promise<Post> {
  return this.http
    .post(this.postUrl, JSON.stringify(post), {headers: this.headers})
    .toPromise()
    .then(() => post)
    .catch(this.handleError);
}

}