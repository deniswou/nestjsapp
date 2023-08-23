import { Controller, Get } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
    
  @Get()
  helloword() {
    return 'nestjs';
  }
}
