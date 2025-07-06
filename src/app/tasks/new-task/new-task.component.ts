import { Component, Output, EventEmitter, output } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Useful for ngModel
import { NewTask } from '../new-task-model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancelTask = new EventEmitter<void>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  @Output() addTask = new EventEmitter<NewTask>();

  onCancelTask() {
    this.cancelTask.emit();
  }

  onSubmit() {
    this.addTask.emit({
      id: new Date().getTime().toString(),
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: new Date(this.enteredDueDate)
    })
  }
}
