import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  private todos;
  private activeTasks;
  private newTodo;
  private path;

  constructor(private todosService: TodoService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.path = params['status'];
      this.getTodos(this.path);
    })
  }

  getTodos(query = '') {
    return this.todosService.get(query).then(todos => {
      this.todos = todos;
      this.activeTasks = this.todos.filter(todo => todo.isDone).length;
    })
  }

  addTodo() {
    this.todosService.add({title: this.newTodo, isDone: false}).then(() => {
      return this.getTodos();
    }).then(() => {
      this.newTodo = ''; // clear input form value
    })
  }

  updateTodo(todo, newValue) {
    todo.title = newValue;
    return this.todosService.put(todo).then(() => {
      todo.editing = false;
      return this.getTodos();
    });
  }

  destroyTodo(todo) {
    this.todosService.delete(todo.id).then(() => {
      return this.getTodos();
    })
  }

  clearCompleted() {
    this.todosService.deleteCompleted().then(() => {
      return this.getTodos();
    })
  }

}
