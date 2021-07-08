import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  todos1 = [
    {name: "1", checked: true, _id: '0'},
  ];
  newTodoName = '';
  animal = true;

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.getAllTodo()
  }

  getAllTodo() {
    this.listService.GetAllTodo({status: true, username: localStorage.getItem('username')}).subscribe((res) => {
      let response: any[] = [];
      response.push(res);
      response.map((res) => {
        this.todos1 = res;
      })
    });
  }

  inputControl(e: any) {
    if(e.target.name == "newTodoName") {
      this.newTodoName = e.target.value;
    }
  }

  newTodo() {
    this.listService.newTodo({username: localStorage.getItem('username'), name: this.newTodoName}).subscribe((res) => {
      this.getAllTodo();
    })
  }

  deleteTodo(id: any) {
    this.listService.editTodo({_id: id, data:{status: false}}).subscribe((res) => {})
    this.getAllTodo();
  }

  todoCheckUpdate(id: any, checked: any) {
    this.listService.editTodo({_id: id, data:{checked: !checked}}).subscribe((res) => {})
    this.getAllTodo();
  }

}
