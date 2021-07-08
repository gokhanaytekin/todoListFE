import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  GetAllTodo(body: any) {
    return this.http.post('http://localhost:80/todo/getAll', body);
  }

  newTodo(body: any) {
    console.log(body);
    return this.http.post('http://localhost:80/todo', body);
  }

  editTodo(body: any) {
    console.log(body);
    return this.http.post('http://localhost:80/todo/update', body);
  }

}
