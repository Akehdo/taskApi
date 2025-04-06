import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService, PrismaService],
})
export class TasksModule {}
