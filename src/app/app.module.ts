import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { ItemDetailComponentComponent } from './item-detail-component/item-detail-component.component';
import { ItemOutputComponentComponent } from './item-output-component/item-output-component.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ItemDetailComponentComponent,
    ItemOutputComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
