import { Container } from "inversify";
import "reflect-metadata";
import { TYPES } from "./types";
import {ITodoService} from "@/app/(apps)/todo/_services/ITodoService";
import {TodoViewModel} from "@/app/(apps)/todo/_viewmodels/TodoViewModel";
import {TodoService} from "@/app/(apps)/todo/_services/TodoService";

const TodoContainer = new Container();
TodoContainer.bind<ITodoService>(TYPES.ITodoService).to(TodoService).inSingletonScope();
TodoContainer.bind<TodoViewModel>(TYPES.TodoViewModel).to(TodoViewModel);

export { TodoContainer };