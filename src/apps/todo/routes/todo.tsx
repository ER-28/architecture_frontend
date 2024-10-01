import { useInjection } from "inversify-react";
import Types from "../types.ts";
import type { TodoViewModel } from "../viewmodels/TodoViewModel.ts";
import { TodoList } from "../views/TodoList.tsx";

function TodoRoute() {
	const todoViewModel = useInjection<TodoViewModel>(Types.TodoViewModel);

	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center">
			<TodoList viewModel={todoViewModel} />
		</div>
	);
}

export default TodoRoute;
