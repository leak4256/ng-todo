import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IToDo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy {

  constructor(private _todoService: TodoService) { }

  private _subscription: Subscription = new Subscription();
  public todo: IToDo;

  ngOnInit(): void {
    this._subscription.add(
      this._todoService.getSelectedTodo().subscribe(data => {
        this.todo = data;
      })
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  public onCompleteTodo(): void {
    this.todo.isCompleted = true;
  }

  public onArchivedTodo(): void {
    this.todo.isArchived = true;
    this._todoService.getTodos().subscribe(data =>{
      let firstNotArchive = data.filter(t => t.isArchived);
      this.todo = firstNotArchive.length? firstNotArchive[0] :null;
      })
    this._todoService.setSelectedTodo(this.todo)
  }

}
