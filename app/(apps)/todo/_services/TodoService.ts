import { injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';
import { ITodoService } from './ITodoService';
import {TodoItemModel, TodoItemSchema} from "@/app/(apps)/todo/_models/TodoItem";

@injectable()
export class TodoService implements ITodoService {
  private todos: TodoItemModel[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  getTodos() {
    return this.todos;
  }

  addTodo(title: string) {
    const newTodo = TodoItemSchema.parse({
      id: Date.now().toString(),
      title,
      completed: false
    });
    this.todos.push(newTodo);
  }

  toggleTodo(id: string) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  removeTodo(id: string) {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}