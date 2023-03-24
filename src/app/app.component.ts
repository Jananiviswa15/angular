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
 public userName = "";
 public currentItem = 'Television';
public header = "student Details";

items = ['Television', 'fridge'];


addItemFromChild(newItem : string){
  this.items.push(newItem);
}


 sayHi(event : any){
console.log(event)
  console.log( "good morning" + this.userName);
 }
}
