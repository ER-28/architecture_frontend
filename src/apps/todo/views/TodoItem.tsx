import { observer } from "mobx-react-lite";
import type React from "react";
import type { TodoItemModel } from "../models/TodoItem.ts";

interface TodoItemProps {
	todo: TodoItemModel;
	onToggle: () => void;
	onRemove: () => void;
}

export const TodoItem: React.FC<TodoItemProps> = observer(
	({ todo, onToggle, onRemove }) => {
		return (
			<li className="flex items-center justify-between p-2 bg-gray-100 rounded-md shadow-sm">
				<div className="flex items-center">
					<input
						type="checkbox"
						checked={todo.completed}
						onChange={onToggle}
						className="mr-2"
					/>
					<span className={`${todo.completed ? "line-through" : ""}`}>
						{todo.title}
					</span>
				</div>
				<button
					onClick={onRemove}
					className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
					type={"submit"}
				>
					Remove
				</button>
			</li>
		);
	},
);
