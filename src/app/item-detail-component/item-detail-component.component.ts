import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-item-detail-component',
  templateUrl: './item-detail-component.component.html',
  styleUrls: ['./item-detail-component.component.css']
})
export class ItemDetailComponentComponent {
  @Input() item : string = "";

}
