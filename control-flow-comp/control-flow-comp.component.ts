import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow-comp',
  templateUrl: './control-flow-comp.component.html',
  styleUrls: ['./control-flow-comp.component.css']
})
export class ControlFlowCompComponent {
title = "angular tutorial";

daysInWeek = ["sunday", "Monday", "Tuesday", "wednesday"];

isAvailable = false;
changeInDays(event : any){
alert("days Change");
}

callFunct(event : any){
  alert("button clicked");
  console.log(event);
}
}
