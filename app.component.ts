import { Component } from '@angular/core';
/*
@Component({ 
  //selector:'app-root',
  //selector : .app-mycomponent,
  selector: '[app-root]',
  template: `<div> Inline html prg using inline css </div>`,
  styles: [`
  div{
background-color: aqua;
color: red;
font-size: larger;
    
}
  `]
})*/

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
})
export class AppComponent {
 public userName = "janani";

 sayHi(){

  return "good morning" + this.userName;
 }
}
