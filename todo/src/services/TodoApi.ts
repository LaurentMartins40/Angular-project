import { Todo } from 'src/app/model/Todo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const QUERY_HTTP_TODO:string ="http://localhost:3000/todos/";

@Injectable({ providedIn: 'root' })
export default class TodoApi {
    constructor(private http:HttpClient){}
    getTodo(){
        return this.http.get(`${QUERY_HTTP_TODO}`);
    }
    addTodo(todo){
        return this.http.post(`${QUERY_HTTP_TODO}`,todo);
    }
    updateTodo(todo){
        return this.http.put(`${QUERY_HTTP_TODO}${todo.id}`,todo);
    }
}
