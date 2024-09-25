import React from "react";
import { observer } from "mobx-react-lite";
import { TodoViewModel } from "../viewmodels/TodoViewModel.ts";
import { TodoForm } from "./TodoForm.tsx";
import { TodoItem } from "./TodoItem.tsx";

interface TodoListProps {
  viewModel: TodoViewModel;
}

export const TodoList: React.FC<TodoListProps> = observer(({ viewModel }) => {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm viewModel={viewModel} />
      <ul>
        {viewModel.todos.map((todo) => (
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
