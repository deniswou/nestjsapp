import { Body, Controller, Delete, Get, Post, Patch, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  helloword() {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(@Body() newTask: CreateTaskDto) {
    return this.tasksService.createTask(newTask.title, newTask.description);
  }

  @Delete(':id')
  deletateTask(@Param('id') id: string) {
    this.tasksService.deleteTask(id);
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() updateFields: UpdateTaskDto) {
    this.tasksService.updateTask(id, updateFields);
  }
}
