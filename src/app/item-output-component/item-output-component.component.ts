import { Component } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-item-output-component',
  templateUrl: './item-output-component.component.html',
  styleUrls: ['./item-output-component.component.css']
})
export class ItemOutputComponentComponent {


  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value : string){
      this.newItemEvent.emit(value);
      
}

}
