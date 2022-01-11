import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IToDo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private mock: Array<IToDo> = [{
    "title": "Ms",
    "description": "Nyctea scandiaca",
    "isCompleted": true,
    "isArchived": false,
    "andDate": "10/25/2021"
  },
  {
    "title": "Honorable",
    "description": "Trachyphonus vaillantii",
    "isCompleted": false,
    "isArchived": false,
    "andDate": "4/10/2021"
  },
  {
    "title": "Honorable",
    "description": "Bison bison",
    "isCompleted": true,
    "isArchived": false,
    "andDate": "10/2/2021"
  },]

  private _todoSubject: BehaviorSubject<Array<IToDo>> = new BehaviorSubject(this.mock)

  constructor() { }

  public getTodos(): Observable<Array<IToDo>> {
    return this._todoSubject.asObservable()
  }
}
