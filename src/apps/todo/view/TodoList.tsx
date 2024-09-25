import React from "react";
import { observer } from "mobx-react-lite";
import { TodoViewModel } from "../viewmodels/TodoViewModel.ts";
import { TodoForm } from "./TodoForm.tsx";
import { TodoItem } from "./TodoItem.tsx";
import { TodoItemModel } from "../models/TodoItem.ts";

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