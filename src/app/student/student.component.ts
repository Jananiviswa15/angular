import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
studentName : string = 'janani';
branch : string = 'eee';
mobile : number = 99447898090;
age : number = 27;
}
