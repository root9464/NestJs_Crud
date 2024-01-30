import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, Query, Req } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('app/todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) { }

  @Get('get-all')
  getAll() {
    return this.todoService.getAll()
  }

  @Post('create')
  createTodo(@Body() dto: CreateTodoDto): Promise<CreateTodoDto> {
    return this.todoService.createTodo(dto)
  }

  @Patch(':id')
  updateTodo(@Param('id') id: number, @Body() dto: CreateTodoDto) {
    return this.todoService.updateTodo(id, dto)
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: number) {
    return this.todoService.deleteTodo(id)
  }


}
