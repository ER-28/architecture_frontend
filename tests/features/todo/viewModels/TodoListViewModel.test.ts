import { TodoViewModel } from "~/features/todo/viewModels/TodoViewModel";
import { TodoService } from "~/features/todo/services/TodoService";

describe("TodoListViewModel", () => {
  let viewModel: TodoViewModel;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService();
    viewModel = new TodoViewModel(service);
  });

  it("should load todos", async () => {
    await service.add({ title: "Test Todo", completed: false });
    await viewModel.loadTodos();
    expect(viewModel.todos.length).toBe(1);
    expect(viewModel.todos[0].title).toBe("Test Todo");
  });

  it("should add a new todo", async () => {
    await viewModel.addTodo("New Todo");
    expect(viewModel.todos.length).toBe(1);
    expect(viewModel.todos[0].title).toBe("New Todo");
  });

  it("should toggle a todo", async () => {
    await viewModel.addTodo("Test Todo");
    const todo = viewModel.todos[0];
    await viewModel.toggleTodo(todo.id);
    expect(viewModel.todos[0].completed).toBe(true);
  });