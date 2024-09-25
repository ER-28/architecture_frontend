import { useState } from "react";
import { useLoaderData } from "remix";
import {TodoViewModel} from "~/features/todo/viewModels/TodoViewModel";

export const TodoForm = () => {
  const [title, setTitle] = useState("");
  const todoViewModel = useLoaderData<TodoViewModel>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await todoViewModel.addTodo(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New Todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};
