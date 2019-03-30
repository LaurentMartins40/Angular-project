import { Todo } from 'src/app/model/Todo';
import { Injectable } from '@angular/core';
import TodoApi from './TodoApi';

@Injectable({ providedIn: 'root' })
export default class FormationService {
    todos: Array<Todo> = [];
    tempTodos: Array<Todo>
    constructor(private todoApi: TodoApi) { }
    getTodo(){
        return this.todoApi.getTodo()
    }
    addTodo(texte) {
        return this.todoApi.addTodo(texte)
    }
    updateTodo(todo) {
        return this.todoApi.updateTodo(todo);
    }
}