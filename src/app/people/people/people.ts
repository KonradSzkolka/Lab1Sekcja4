import { Injectable } from '@angular/core';
import { Person } from '../../classes/person';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private readonly repository: Person[] = [
    new Person(1, 'Jan', 'Kowalski', new Date(1990, 1, 1)),
    new Person(2, 'Anna', 'Nowak', new Date(1985, 5, 15)),
    new Person(3, 'Piotr', 'Zieliński', new Date(1992, 10, 30)),
    new Person(4, 'Katarzyna', 'Wiśniewska', new Date(1988, 3, 20)),
    new Person(5, 'Tomasz', 'Lewandowski', new Date(1995, 7, 10)),
  ];

  public get(): Person[] {
    return this.repository.map(x=> new Person(x.id, x.name, x.surname, x.dateOfBirth));


  }

  public getById(id: number): Person{
    const obj = this.repository.find(x=>x.id === id);
    if(obj){
      return new Person(obj.id, obj.name, obj.surname, obj.dateOfBirth);
    }

    throw new Error('Nie znaleziono osoby o podanym id');
  }

  public trackByID(index: number, obj: Person): number {
    return obj.id;
  }
}
