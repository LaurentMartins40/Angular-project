import { Todo } from 'src/app/model/Todo';
import { Injectable } from '@angular/core';
import TodoApi from './TodoApi';

@Injectable({ providedIn: 'root' })
export default class FormationService {
    todos: Array<Todo> = [];
    tempTodos: Array<Todo>
    constructor(private TodoApi: TodoApi) { }
    getTodo(): Promise<Array<Todo>> {
        return new Promise((resolve) => {{
            resolve(this.todos)
        };
    });
    }
    addTodo(texte){
        let x:number= this.todos.length;
        this.tempTodos = this.todos;
        this.todos = [...this.tempTodos , new Todo(texte, false,x)];
        return this.getTodo()
    }
    updateTodo(todo) {
        let index = this.todos.findIndex(t => t.id === todo.id);
        this.todos[index].isDone = todo.isDone
        return this.getTodo()
    }
}