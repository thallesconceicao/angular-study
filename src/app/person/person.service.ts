import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  persons = [
    { 
      id: 1,
      name: "Jonah",
      age: 25,
      job: "Engineer",
      img: 'https://loremflickr.com/100/100/man/'
    },
    { 
      id: 2,
      name: "Mary",
      age: 16,
      job: "Student",
      img: 'https://loremflickr.com/100/100/woman/'
    },
    { 
      id: 3,
      name: "Tommy",
      age: 31,
      job: "Lawyer",
      img: 'https://loremflickr.com/100/100/person/'
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
