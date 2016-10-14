import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Post } from './post.model';
import { PostService }  from './post.service';


@Component({
    selector: 'post-detail',
    templateUrl: 'post-detail.component.html'
})

export class PostDetailComponent implements OnInit{
   post: Post;
    constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.postService.getPostById(id)
        .then(post => this.post = post);
    });
  }
  
}
