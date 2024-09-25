import "reflect-metadata";
import { container } from "tsyringe";
import { TodoService } from "~/features/todo/services/TodoService";

container.register("TodoService", { useClass: TodoService });
