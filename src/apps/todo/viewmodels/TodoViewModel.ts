import { inject, injectable } from "inversify";
import { makeAutoObservable } from "mobx";
import { TODO_TYPES } from "../types.ts";
import {ITodoService} from "../services/ITodoService.ts";

@injectable()
export class TodoViewModel {
  constructor(
    @inject(TODO_TYPES.ITodoService) private todoService: ITodoService,
  ) {
    makeAutoObservable(this);
  }

  get todos() {
    return this.todoService.getTodos();
  }

  addTodo(title: string) {
    this.todoService.addTodo(title);
  }

  toggleTodo(id: string) {
    this.todoService.toggleTodo(id);
  }

  removeTodo(id: string) {
    this.todoService.removeTodo(id);
  }
}
