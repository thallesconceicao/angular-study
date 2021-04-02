import { Component, Input, OnInit } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {

  @Input() person: any
  // person : any = null

  constructor(private personService : PersonService) { }

  ngOnInit(): void {
    // this.person = this.personService.getPersonData(2)
  }

}
