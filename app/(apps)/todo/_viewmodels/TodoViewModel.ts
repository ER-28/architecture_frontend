import { inject, injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';
import { TYPES } from '../types';
import {z} from "zod";
import * as ITodoService from "@/app/(apps)/todo/_services/ITodoService";

@injectable()
export class TodoViewModel {
  constructor(
    @inject(TYPES.ITodoService) private todoService: ITodoService.ITodoService
  ) {
    makeAutoObservable(this);
  }

  get todos() {
    return this.todoService.getTodos();
  }

  addTodo(title: string) {
    try {
      this.todoService.addTodo(title);
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error('Validation error:', error.errors);
      }
      throw error;
    }
  }

  toggleTodo(id: string) {
    try {
      this.todoService.toggleTodo(id);
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error('Validation error:', error.errors);
      }
      throw error;
    }
  }

  removeTodo(id: string) {
    this.todoService.removeTodo(id);
  }
}
