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
imageSrc : string = '../assets/stock-photo-variety-of-ice-cream-scoops-in-cones-with-chocolate-vanilla-and-strawberry-642062308.jpg'
}
