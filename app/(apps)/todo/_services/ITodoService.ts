import {TodoItemModel} from "@/app/(apps)/todo/_models/TodoItem";

export interface ITodoService {
  getTodos(): TodoItemModel[];
  addTodo(title: string): void;
  toggleTodo(id: string): void;
  removeTodo(id: string): void;
}