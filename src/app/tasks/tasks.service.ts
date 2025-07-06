import { Injectable } from '@angular/core';
import { DUMMY_TASKS } from './dummy-tasks';
import { NewTask } from './new-task.model';
import { Task } from './task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
    tasks: Task[] = [];

    constructor() {
        const storedTasks = localStorage.getItem('tasks');
        this.tasks = storedTasks ? JSON.parse(storedTasks, this.reviver) : DUMMY_TASKS;
    }

    private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    private reviver(key: string, value: any) {
        if (key === 'dueDate') return new Date(value);
        return value;
    }

    getUserTasks(userId: string) {
        return this.tasks.filter(task => task.userId === userId);
    }

    addTask(newTaskData: NewTask, userId: string) {
        this.tasks.unshift({
            id: newTaskData.id,
            userId: userId,
            title: newTaskData.title,
            summary: newTaskData.summary,
            dueDate: newTaskData.dueDate,
        });
        this.saveTasks();
    }

    deleteTask(taskId: string) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this.saveTasks();
    }

}