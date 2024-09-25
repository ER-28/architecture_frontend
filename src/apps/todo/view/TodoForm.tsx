import React, { useState } from 'react';
import {TodoViewModel} from "../viewmodels/TodoViewModel.ts";

interface TodoFormProps {
  viewModel: TodoViewModel;
}

export const TodoForm: React.FC<TodoFormProps> = ({ viewModel }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      viewModel.addTodo(title.trim());
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
};
