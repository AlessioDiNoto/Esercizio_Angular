import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  standalone: false,
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent {
  @Input() todo!: { text: string; completed: boolean };
  @Output() delete = new EventEmitter<void>();
  @Output() toggle = new EventEmitter<void>();

  onDelete() {
    this.delete.emit();
  }

  onToggle() {
    this.toggle.emit();
  }
}
