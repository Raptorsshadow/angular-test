import { Component } from '@angular/core';
import { Model, TodoItem } from './model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  model = new Model();

  getName() {
  	return this.model.user;
  }
  getTodos() {
  	return this.model.items.filter(todo => !todo.done);
  }
  addItem(text) {
  	if(text != '') {
  		this.model.items.push(new TodoItem(text, false));
  	}
  }
}
