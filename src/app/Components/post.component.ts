import { Component, OnInit } from '@angular/core';
import { Post } from '../resources/post.model';

import { Router } from '@angular/router';
import { PostService } from '../resources/post.service';
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
  templateUrl: '../Pages/post.component.html',
 
})
export class PostComponent implements OnInit {
  
  posts: Post[];
  selectedPost: Post;
  id: number;
  constructor(private router: Router,private postService: PostService){}
  getPosts(): void {
    this.postService.getPosts().then(posts => this.posts = posts);
  }
  
  ngOnInit(): void {
    this.getPosts();
  }
  onSelect(post: Post): void{
    this.selectedPost = post;
    //this.router.navigate(['/detail',post.id]);
    //console.log(this.selectedPost);
     this.id = Number(this.selectedPost.id);
     //console.log(this.selectedPost.id);
     //console.log(this.id);
    this.router.navigate(['/detail',this.id]);
  }
  // gotoDetail(): void {
  //   this.router.navigate(['/detail', this.selectedPost.id]);
  // }
  onDelete(post: Post): void{
    if(confirm("Are you sure to delete this ?")){
    this.postService.delete(post.id)
                    .then(() => {
                      this.posts = this.posts.filter(p => p !== post);
        if (this.selectedPost === post) { this.selectedPost = null; }
        this.router.navigate(['/allItem']);
      });
  }
  }
}
