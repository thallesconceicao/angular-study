import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonCardComponent } from './person-card/person-card.component';
import { PersonListComponent } from './person-list/person-list.component';



@NgModule({
  declarations: [
    PersonCardComponent, 
    PersonListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PersonCardComponent,
    PersonListComponent
  ]
})
export class PersonModule { }
