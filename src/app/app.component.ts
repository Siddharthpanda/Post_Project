import {bindDirectiveAfterViewLifecycleCallbacks} from '@angular/compiler/src/view_compiler/lifecycle_binder';
import { Component } from '@angular/core';

@Component({
selector: 'app-root',
template: `
      <div class="row back">
    <h1 class="text-center">{{title}}</h1>
    </div>
    <br> 
    <div class="row">
      <div class="col-sm-4"></div>
      <div class="col-sm-4 mid">
          <br>
    <nav>
      <a routerLink="/allItem" routerLinkActive="active" class="btn btn-primary"> Show All Feedback</a>
      <a routerLink="post/new" routerLinkActive="active" class="pull-right text-warning"><span class="glyphicon glyphicon-plus" >Add_Feedback</span></a>
    </nav>
    <router-outlet></router-outlet>
      <hr>
      </div>
      <div class="col-sm-4"></div>
    </div>
    
  `,
  styles: [`div.back{
    background-color: lightblue;
  }
  div.mid{
    border-radius: 15px 0 15px 0;
    background-color: #eee;
  }
  `]
})

export class AppComponent{
    title = 'Feedback Room';
}