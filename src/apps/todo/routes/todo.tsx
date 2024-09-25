import  {TodoContainer} from "../todo.config.ts";
import {TodoViewModel} from "../viewmodels/TodoViewModel.ts";
import {TodoList} from "../view/TodoList.tsx";
import {TODO_TYPES} from "../types.ts";

function TodoRoute() {
  const todoViewModel = TodoContainer.get<TodoViewModel>(TODO_TYPES.TodoViewModel);

  return (
    <TodoList viewModel={todoViewModel} />
  )
}

export default TodoRoute;

