import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../model/Todo';
import { TodoListComponent } from '../todo-list/todo-list.component';
@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {
  todos: Array<Todo> = [];

  constructor() { }

  updateTodo(todo) {
    let index = this.todos.findIndex(t => t.title === todo.title);
    this.todos[index].isDone = todo.isDone
  }
  ngOnInit() {
    this.todos = [new Todo('faire le todo container', false),
    new Todo('faire le todo list', false),
    new Todo('faire le todo item', false)
    ]
  }
}
