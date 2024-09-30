import { TodoContainer } from "../todo.config.ts";
import { TODO_TYPES } from "../types.ts";
import { TodoList } from "../view/TodoList.tsx";
import type { TodoViewModel } from "../viewmodels/TodoViewModel.ts";

function TodoRoute() {
	const todoViewModel = TodoContainer.get<TodoViewModel>(
		TODO_TYPES.TodoViewModel,
	);

	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center">
			<TodoList viewModel={todoViewModel} />
		</div>
	);
}

export default TodoRoute;
