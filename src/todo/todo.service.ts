import { Body, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TodoService extends HttpException {
  constructor(private readonly prisma: PrismaService) {
    super('Forbidden', HttpStatus.FORBIDDEN);
  }

  async getAll() {
    return this.prisma.todo.findMany()
  }

  async createTodo(dto: CreateTodoDto) {
    return this.prisma.todo.create({
      data: {
        heading: dto.heading,
        body: dto.body,
        isComplited: false
      }
    })
  }

  async getByTodoId(id: number) {
    const todo = await this.prisma.todo.findUnique({
      where: {
        id: +id,
      },
    })
    if (!todo) {
      throw new NotFoundException('Task not found');
    }
    return todo;
  }

  async updateTodo(id: number, dto: CreateTodoDto) {
    const Todo = await this.getByTodoId(id)
    return this.prisma.todo.update({
      where: {
        id
      },
      data: {
        heading: dto.heading != null ? dto.heading : Todo.heading,
        body: dto.body != null ? dto.body : Todo.heading,
        isComplited: dto.isComplited != null ? dto.isComplited : Todo.isComplited
      }
    })
  }

  async deleteTodo(id: number) {
    try {
      const q = this.prisma.todo.delete({
        where: { id }
      })
      return q
    } catch (e) {
      return e
    }
  }
}