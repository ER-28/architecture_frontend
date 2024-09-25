import { TodoService } from "~/features/todo/services/TodoService";

describe("TodoService", () => {
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService();
  });

  it("should add a new todo", async () => {
    const todo = await service.add({ title: "Test Todo", completed: false });
    expect(todo.title).toBe("Test Todo");
    expect(todo.completed).toBe(false);
  });

  it("should get all todos", async () => {
    await service.add({ title: "Test Todo", completed: false });
    const todos = await service.getAll();
    expect(todos.length).toBe(1);
    expect(todos[0].title).toBe("Test Todo");
  });

  it("should toggle a todo", async () => {
    const todo = await service.add({ title: "Test Todo", completed: false });
    const updatedTodo = await service.toggle(todo.id);
    expect(updatedTodo?.completed).toBe(true);
  });

  it("should delete a todo", async () => {
    const todo = await service.add({ title: "Test Todo", completed: false });
    await service.delete(todo.id);
    const todos = await service.getAll();
    expect(todos.length).toBe(0);
  });
});