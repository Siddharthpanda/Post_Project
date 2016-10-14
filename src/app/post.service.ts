import {Injectable} from '@angular/core';
import { Post } from './post.model';
import { POSTS } from './posts.data';

@Injectable()
export class PostService{
    // For getting all posts
    getPosts(): Promise<Post[]>{
        return Promise.resolve(POSTS);
    }
    getPostById(id: number): Promise<Post> {
    return this.getPosts()
               .then(posts => posts.find(post => post.id === id));
  }
}