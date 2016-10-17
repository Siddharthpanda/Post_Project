
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';

import { Post } from './post.model';
import { PostService }  from './post.service';


@Component({
    selector: 'post-detail',
    templateUrl: 'post-detail.component.html',
    styles: [`p{
      text-indent: 1em;
      font-size: .9em;
      color: #5F9EA0;
    }`]
})

export class PostDetailComponent implements OnInit{
  // posts: Post[];
   post: Post;
   selectedPost: Post;
    constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.postService.getPostById(id)
        .then(post => this.post = post);
    });
  }

  select(post: Post): void {
    this.selectedPost= post;
  }
//delete post
  deletePost(post: Post): void{
    if(confirm("Are you sure to delete this ?")){
    this.postService.delete(post.id)
                    .then(() => {
                      //this.posts = this.posts.filter(p => p !== post);
       // if (this.selectedPost === post) { this.selectedPost = null; }
        this.router.navigate(['/allItem']);
      });
      }
  }
//update post
  updatePost(post: Post): void{
    this.postService.update(this.post)
        .then(() => this.router.navigate(['/allItem']));
  }


  
}
