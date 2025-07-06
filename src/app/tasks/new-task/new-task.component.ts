import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancelTask = new EventEmitter<void>();

  onCancelTask() {
    this.cancelTask.emit();
  }

}
