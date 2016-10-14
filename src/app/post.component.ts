import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';
import { POSTS } from './posts.data';
import { Router } from '@angular/router';
import { PostService } from './post.service';
// const POSTS: Post[] = [
//   {
//     id: 1,
//     name: 'Sid',
//     title: 'Songs',
//     desc: 'Abeffkajklzf'
//   },
//   {
//     id: 2,
//     name: 'xyz',
//     title: 'films',
//     desc: 'ashflkfasg'
//   }
// ];

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  posts: Post[];
  selectedPost: Post;

  constructor(private router: Router,private postService: PostService){}
  getPosts(): void {
    this.postService.getPosts().then(posts => this.posts = posts);
  }
  
  ngOnInit(): void {
    this.getPosts();
  }
  onSelect(post: Post): void{
    this.selectedPost = post;
    //console.log(this.selsectedPost);
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedPost.id]);
  }
  onDelete(post: Post): void{
    this.selectedPost = post;
    //console.log("deleted"+  this.selsectedPost);
  }
}
