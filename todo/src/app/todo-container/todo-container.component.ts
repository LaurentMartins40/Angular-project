import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../model/Todo';
import { TodoListComponent } from '../todo-list/todo-list.component';
import FormationService from 'src/services/todoService';
@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {
  todos: Array<Todo>;
  constructor(public formationService:FormationService) { }
  addTodo(texte){
    this.formationService.addTodo(texte).then(p=>this.todos=p)
  }
  updateTodo(todo) {
    this.formationService.updateTodo(todo).then(p=>this.todos=p)
  }
  ngOnInit() {
    this.formationService.getTodo().then(p=>this.todos=p)
  }
}
