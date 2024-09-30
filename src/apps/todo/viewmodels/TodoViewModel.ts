import { inject, injectable } from "inversify";
import { makeAutoObservable } from "mobx";
import type { ITodoService } from "../services/ITodoService.ts";
import { TODO_TYPES } from "../types.ts";

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
