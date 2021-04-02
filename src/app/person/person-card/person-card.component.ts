import { Component, OnInit } from '@angular/core';
import { PersonCardService } from './person-card.service';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {

  person : any = null

  constructor(private personCardService : PersonCardService) { }

  ngOnInit(): void {
    this.person = this.personCardService.getPersonData()
  }

  

}
