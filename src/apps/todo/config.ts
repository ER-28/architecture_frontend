import { Container } from "inversify";
import "reflect-metadata";
import type { ITodoService } from "./services/ITodoService.ts";
import { TodoService } from "./services/TodoService.ts";
import TYPES from "./types";
import { TodoViewModel } from "./viewmodels/TodoViewModel.ts";

const TodoContainer = new Container();
TodoContainer.bind<ITodoService>(TYPES.ITodoService)
	.to(TodoService)
	.inSingletonScope();
TodoContainer.bind<TodoViewModel>(TYPES.TodoViewModel).to(TodoViewModel);

export { TodoContainer };
