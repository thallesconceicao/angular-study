import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonCardService {

  constructor() { }

  public getPersonData(){
    return { 
      name: "Jonah",
      age: 25,
      job: "Engineer"
    }
  }
}
