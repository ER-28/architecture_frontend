import { Todo } from "~/features/todo/models/Todo";

describe("Todo Model", () => {
  it("should create a new Todo", () => {
    const todo = new Todo({ id: "1", title: "Test Todo", completed: false });
    expect(todo.id).toBe("1");
    expect(todo.title).toBe("Test Todo");
    expect(todo.completed).toBe(false);
  });

  it("should toggle completion status", () => {
    const todo = new Todo({ id: "1", title: "Test Todo", completed: false });
    todo.toggle();
    expect(todo.completed).toBe(true);
    todo.toggle();
    expect(todo.completed).toBe(false);
  });
});