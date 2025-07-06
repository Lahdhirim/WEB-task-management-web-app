import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // Useful for date

type Task = {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: Date;
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

}
