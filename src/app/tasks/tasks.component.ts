import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { DUMMY_TASKS } from './dummy-tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  tasks = DUMMY_TASKS;
  isAddingTask = false;

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.userId);
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  addNewTask() {
    this.isAddingTask = true;
  }

  cancelAddTask() {
    this.isAddingTask = false;
  }

}
