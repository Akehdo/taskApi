import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dtos/create-task-dto';

@Injectable()
export class TasksService {
    constructor(private prisma: PrismaService) {}

    getAll(){
        return this.prisma.task.findMany();
    }

    getById(id: string){
        return this.prisma.task.findUnique({ where: { id } });
    }

    create(dto: CreateTaskDto) {
        return this.prisma.task.create({
          data: {
            title: dto.title,
            description: dto.description,
            completed: dto.completed ?? false,
          },
        });
      }

    delete(id: string) {
        return this.prisma.task.delete({ where: { id } });
      }
}
