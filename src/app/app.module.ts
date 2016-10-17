import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostDetailComponent } from './post-detail.component';
import { PostComponent } from './post.component';
import { NewComponent } from './new.component';
import { PostService } from './post.service';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostDetailComponent,
    NewComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot([{ path: '', redirectTo: '/allItem', pathMatch: 'full' },
  { path: 'allItem',  component: PostComponent },
  { path: 'detail/:id', component: PostDetailComponent },
  { path: 'post/new',     component:NewComponent }])
  ],
  exports: [ RouterModule ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
