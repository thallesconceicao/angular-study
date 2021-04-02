import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonCardService {

  persons = [
    { 
      id: 1,
      name: "Jonah",
      age: 25,
      job: "Engineer"
    },
    { 
      id: 2,
      name: "Mary",
      age: 16,
      job: "Student"
    },
    { 
      id: 3,
      name: "Tommy",
      age: 31,
      job: "Lawyer"
    }
  ]

  constructor() { }

  public getPersonData(id : number){
    return this.persons.find(person => person.id == id)
  }

  getPersonList(){
    return this.persons
  }

}
