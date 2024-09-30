import type { TodoItemModel } from "../models/TodoItem.ts";

export interface ITodoService {
	getTodos(): TodoItemModel[];
	addTodo(title: string): void;
	toggleTodo(id: string): void;
	removeTodo(id: string): void;
}
