import { Module } from '@nestjs/common';
import { TasksController } from './controllers/tasks.controller';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { TasksService } from './services/tasks.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService, PrismaService],
})
export class TasksModule {}
