import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.css']
})
export class FrontendComponent {

reactiveForm = new FormGroup({
firstName : new FormControl('',[Validators.required]),
lastName : new FormControl(),
email : new FormControl(),

  })

  onSubmit() : any{
    console.log("form submitted...");
  }
}
