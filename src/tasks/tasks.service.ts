import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';
import { v4 } from 'uuid';

@Injectable()
export class TasksService {
  //simula base de datos
  private tasks: Task[] = [
    {
      id: '1',
      title: 'Task 1',
      description: 'Description 1',
      status: TaskStatus.PENDING,
    },
  ];
  getAllTasks() {
    return this.tasks;
  }

  createTask(title: string, description: string) {
    const task = {
      id: v4(),
      title,
      description,
      status: TaskStatus.PENDING,
    };
    this.tasks.push(task);
    return task;
  }

  getTasksById(id: string): Task {
    return this.tasks.find(task => task.id === id);
  }

  updateTask(id: string, updateFields: any) {
    const task = this.getTasksById(id);
    const newTask = Object.assign(task, updateFields);
    this.tasks.map(task => task.id === id ? newTask : task);
    return newTask;
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
