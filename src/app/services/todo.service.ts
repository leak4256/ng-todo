import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IToDo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private mock: Array<IToDo> = [{
    id:1,
    "title": "Ms",
    "description": "Nyctea scandiaca",
    "isCompleted": true,
    "isArchived": false,
    "andDate": "10/25/2021",
    selected: true
  },
  {id:2,
    "title": "Honorable",
    "description": "Trachyphonus vaillantii",
    "isCompleted": false,
    "isArchived": false,
    "andDate": "4/10/2021",
    selected: false
  },
  {id:3,
    "title": "Honorable",
    "description": "Bison bison",
    "isCompleted": true,
    "isArchived": false,
    "andDate": "10/2/2021",
    selected: false
  },]

  private _todoSubject: BehaviorSubject<Array<IToDo>> = new BehaviorSubject(this.mock)

  private _singleTodoSubject: BehaviorSubject<IToDo> = new BehaviorSubject(this.mock[0])

  constructor() { }

  public getTodos(): Observable<Array<IToDo>> {
    return this._todoSubject.asObservable();
  }

  public getSelectedTodo():Observable<IToDo>{
    return this._singleTodoSubject.asObservable();
  }

  public setSelectedTodo(todo:IToDo) {
   this._singleTodoSubject.next(todo)
  }
}