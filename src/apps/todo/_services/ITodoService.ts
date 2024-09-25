import {TodoItemModel} from "../_models/TodoItem.ts";

export interface ITodoService {
  getTodos(): TodoItemModel[];
  addTodo(title: string): void;
  toggleTodo(id: string): void;
  removeTodo(id: string): void;
}