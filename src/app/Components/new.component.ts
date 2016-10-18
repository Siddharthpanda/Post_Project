import { ANY_STATE } from '@angular/core/src/animation/animation_constants';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../resources/post.model';
import { PostService } from '../resources/post.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
selector: 'new',
templateUrl: '../Pages/new.component.html'
})


export class NewComponent implements OnInit{
    public myForm: FormGroup;

    constructor(private router: Router, private postService: PostService){}

    ngOnInit(){  
      this.myForm = new FormGroup({
        id: new FormControl('', [<any>Validators.compose([
                                            Validators.required,
                                            Validators.pattern('[\\w\\-\\s\\/]+')
                                                ]  )]   ),
        name: new FormControl('', [<any>Validators.compose([
                                            Validators.required,
                                            Validators.pattern('[\\w\\-\\s\\/]+')
                                                ]  )]    ),
        title: new FormControl('', [<any>Validators.compose([
                                            Validators.required,
                                            Validators.pattern('[\\w\\-\\s\\/]+')
                                                ]  )]    ),
        desc: new FormControl('', [<any>Validators.compose([
                                            Validators.required,
                                            Validators.pattern('[\\w\\-\\s\\/]+')
                                               ]  )]    )
        })
        }

    

    save(newPost: Post): void {   
        // newPost.id = +newPost.id;
       this.postService.create(newPost)
           .then(() => this.router.navigate(['/allItem']));
    }
    
}