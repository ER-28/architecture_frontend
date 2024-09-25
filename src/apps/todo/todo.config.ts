import { Container } from "inversify";
import "reflect-metadata";
import { TODO_TYPES } from "./types";
import {TodoViewModel} from "./viewmodels/TodoViewModel.ts";
import {TodoService} from "./_services/TodoService.ts";
import {ITodoService} from "./_services/ITodoService.ts";

const TodoContainer = new Container();
TodoContainer.bind<ITodoService>(TODO_TYPES.ITodoService).to(TodoService).inSingletonScope();
TodoContainer.bind<TodoViewModel>(TODO_TYPES.TodoViewModel).to(TodoViewModel);

export { TodoContainer };