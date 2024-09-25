import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useLoaderData } from "@remix-run/react";
import {Todo} from "~/features/todo/models/Todo";
import {TodoViewModel} from "~/features/todo/viewModels/TodoViewModel";

export const TodoList = observer(() => {
  const todoViewModel = useLoaderData<TodoViewModel>();

  useEffect(() => {
    todoViewModel.loadTodos();
  }, [todoViewModel]);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoViewModel.todos.get().map((todo: Todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => todoViewModel.toggleTodoCompleted(todo.id)}
            />
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
});
