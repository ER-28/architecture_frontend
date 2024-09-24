import React from 'react';
import { observer } from 'mobx-react-lite';
import {TodoItemModel} from "@/app/_src/apps/todo/_models/TodoItem";

interface TodoItemProps {
  todo: TodoItemModel;
  onToggle: () => void;
  onRemove: () => void;
}

export const TodoItem: React.FC<TodoItemProps> = observer(({ todo, onToggle, onRemove }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={onToggle}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.title}
      </span>
      <button onClick={onRemove}>Remove</button>
    </li>
  );
});