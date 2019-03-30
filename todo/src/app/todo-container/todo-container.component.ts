import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../model/Todo';
import { TodoListComponent } from '../todo-list/todo-list.component';
import FormationService from 'src/services/todoService';
import _ from 'node_modules/lodash'
@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {
  todos: Array<Todo>;
  constructor(public formationService:FormationService) { }
  addTodo(texte){
    this.formationService.addTodo(new Todo(texte,false)).subscribe((p:any)=>this.todos = [...this.todos,p])
  }
  updateTodo(todo) {
    this.formationService.updateTodo(todo).subscribe((p:any)=>{
        this.todos =[..._.without(this.todos,todo),p].sort((a,b)=>a.id-b.id) 
    })
  }
  getTodo(){
    this.formationService.getTodo().subscribe((p:any)=>this.todos=p)
  }
  ngOnInit() {
    this.formationService.getTodo().subscribe((p:any)=>this.todos=p)
  }
}
