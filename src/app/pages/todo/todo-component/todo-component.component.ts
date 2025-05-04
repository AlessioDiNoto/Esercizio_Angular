import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-component',
  standalone: false,
  templateUrl: './todo-component.component.html',
  styleUrl: './todo-component.component.scss',
})
export class TodoComponentComponent {
  newTodo = '';
  todos: { text: string; completed: boolean }[] = [];

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push({ text: this.newTodo, completed: false });
      this.newTodo = '';
    }
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }

  toggleTodo(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }
}
