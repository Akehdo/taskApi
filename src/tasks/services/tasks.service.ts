import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreateTaskDto } from '../dtos/create-task-dto';


@Injectable()
export class TasksService {
    constructor(private prisma: PrismaService) {}

    getAll(){
        return this.prisma.task.findMany();
    }

    async getById(id: string){
        const task = await this.prisma.task.findUnique({ where: { id }}); 

        if(task != null) {
          throw new Error('Задача не найдена');
        }

        return  task;
    }

    async create(dto: CreateTaskDto) {
        return this.prisma.task.create({
          data: {
            title: dto.title,
            description: dto.description,
            completed: dto.completed ?? false,
          },
        });
      }

    async delete(id: string) {
      const task = await this.prisma.task.delete({ where: { id } });
        if(!task) {
          throw new Error('Нельзя удалить: задача не существует');
        }
        return task;
      }
}
