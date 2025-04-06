import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { CreateTaskDto } from '../dtos/create-task-dto';
import { TasksService } from '../services/tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAll() {
    return this.tasksService.getAll();
  }

  @Get(":id")
  getById(@Param('id') id: string) {
    return this.tasksService.getById(id);
  }

  @Post()
  create(@Body() dto: CreateTaskDto) {
    return this.tasksService.create(dto);
  }

  @Delete(":id")
  delete(@Param('id') id: string) {
    return this.tasksService.delete(id);
  }
}
