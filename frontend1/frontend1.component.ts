import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-frontend1',
  templateUrl: './frontend1.component.html',
  styleUrls: ['./frontend1.component.css']
})
export class Frontend1Component {
contactForm = new FormGroup({
firstName : new FormControl(),
lastName : new FormControl(),
email : new FormControl(),
gender : new FormControl(),
isMarried :  new FormControl(),
address : new FormGroup({
    city : new FormControl(),
    street : new FormControl(),
    pincode : new FormControl(),
    country : new FormControl(),
})

})

}
