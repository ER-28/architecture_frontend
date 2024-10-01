import { observer } from "mobx-react-lite";
import type React from "react";
import type { TodoItemModel } from "../models/TodoItem.ts";
import type { TodoViewModel } from "../viewmodels/TodoViewModel.ts";
import { TodoForm } from "./TodoForm.tsx";
import { TodoItem } from "./TodoItem.tsx";

interface TodoListProps {
	viewModel: TodoViewModel;
}

export const TodoList: React.FC<TodoListProps> = observer(({ viewModel }) => {
	return (
		<div className="max-w-md mx-auto p-4 bg-white rounded-md shadow-md">
			<h1 className="text-2xl font-bold mb-4">Todo List</h1>
			<TodoForm viewModel={viewModel} />
			<ul className="mt-4 space-y-2">
				{viewModel.todos.map((todo: TodoItemModel) => (
					<TodoItem
						key={todo.id}
						todo={todo}
						onToggle={() => viewModel.toggleTodo(todo.id)}
						onRemove={() => viewModel.removeTodo(todo.id)}
					/>
				))}
			</ul>
		</div>
	);
});
