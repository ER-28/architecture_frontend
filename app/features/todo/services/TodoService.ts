import { Todo } from "../models/Todo";

export class TodoService {
  private todos: Todo[] = [];

  async getTodos(): Promise<Todo[]> {
    return this.todos;
  }

  async addTodo(title: string): Promise<Todo> {
    const newTodo: Todo = { id: Date.now().toString(), title, completed: false };
    this.todos.push(newTodo);
    return newTodo;
  }

  async toggleTodoCompleted(id: string): Promise<void> {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }
}
