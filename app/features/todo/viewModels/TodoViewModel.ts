import { makeAutoObservable } from "mobx";
import {atom} from "nanostores";
import { TodoService } from "../services/TodoService";
import { container } from "tsyringe";
import {Todo} from "~/features/todo/models/Todo";

export class TodoViewModel {
  todos = atom<Todo[]>([]);

  private todoService: TodoService;

  constructor() {
    this.todoService = container.resolve(TodoService);
    makeAutoObservable(this);
  }

  async loadTodos() {
    const todos = await this.todoService.getTodos();
    this.todos.set(todos);
  }

  async addTodo(title: string) {
    const todo = await this.todoService.addTodo(title);
    this.todos.set([...this.todos.get(), todo]);
  }

  async toggleTodoCompleted(id: string) {
    await this.todoService.toggleTodoCompleted(id);
    this.todos.set(this.todos.get().map((todo: Todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }
}
