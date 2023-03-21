import { Component } from '@angular/core';

@Component({ 
  selector:'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*
@Component({ 
  selector: '[app-root]',
  template:
  `<h1>  hi {{userName}}  </h1>
  <h2> {{23+67}}</h2>
  <h2>{{userName.length}}</h2>
  <span> {{userName.toUpperCase()}} </span>
  <p> {{sayHi()}}</p>
  `,
  styles: []
})*/
export class AppComponent {
 public userName = "janani";
public header = "student Details";
 sayHi(){

  return "good morning" + this.userName;
 }
}
