import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-comp',
  templateUrl: './pipe-comp.component.html',
  styleUrls: ['./pipe-comp.component.css']
})
export class PipeCompComponent implements OnInit{

  currentDate : string = "";
  userName : string = "";

  constructor(){

  }

  ngOnInit(): void {
      this.currentDate = new Date().toDateString();
      this.userName = "janani";
  }
}
