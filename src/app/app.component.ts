import { Component } from '@angular/core';

@Component({
selector: 'app-root',
template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/allItem" routerLinkActive="active">Show All Feedback</a>
      <a routerLink="/add" routerLinkActive="active">Add a new Feedback</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})

export class AppComponent{
    title = 'Feedback Page';
}