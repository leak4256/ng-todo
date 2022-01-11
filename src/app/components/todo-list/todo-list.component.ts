import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';
import { IToDo } from '../../models/todo.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {

  public todos: Array<IToDo> = []

  //ngOnDestroy א עושים סבסקישן בלי שעוישם לו אןסבסקיב ואת זה מעשה בתוך 
  private _subscription = new Subscription();

  constructor(private _todoService: TodoService) { }

  ngOnInit(): void {
    // ngOnDestroyבאובייקט אחד לו נעשה אןסבסקיפטשין ב_subscriptionכדי שלא נצטרך לעשות אןסבסקריב על הרבה אנחנו שמים את כל ה
    this._subscription.add(
      this._todoService.getTodos().subscribe(data => {
        this.todos = data;
      })
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  onTodoClick(todo: IToDo, index: number) {
    this._todoService.setSelectedTodo(todo);
    this.todos.forEach(t => {
      if (t.selected)
        t.selected = false
    })
    this.todos[index].selected = true;
  }


}
