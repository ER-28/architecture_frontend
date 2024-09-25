import {container} from "tsyringe";
import {TodoViewModel} from "~/features/todo/viewModels/TodoViewModel";
import {TodoForm} from "~/features/todo/views/TodoForm";
import {TodoList} from "~/features/todo/views/TodoList";

export const loader = () => {
  return container.resolve(TodoViewModel);
};

export default function TodoRoute() {
  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
}