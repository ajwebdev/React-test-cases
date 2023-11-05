import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "./Todo";
import { BrowserRouter } from "react-router-dom";

const MemoryRouter = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTodos = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const btn = screen.getByRole("button", { name: "Add" });

  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(btn);
  });
};

describe("Todo", () => {
  it("Should render the single  list item", () => {
    render(<MemoryRouter />);
    addTodos(["Demo"]);
    const text = screen.getByText(/Demo/i);
    expect(text).toBeInTheDocument();
  });
  it("Should render the multiple  list item", () => {
    render(<MemoryRouter />);
    addTodos(["Go for shopping", "Wash the hands"]);
    const text = screen.getAllByTitle("TodoList");
    expect(text.length).toBe(2);
  });
  it("Should not render the inital active class", () => {
    render(<MemoryRouter />);
    addTodos(["Demo"]);
    const text = screen.getByText(/Demo/i);
    expect(text).not.toHaveClass('todo-item-active');
  });
  it("Should not render the inital active class", () => {
    render(<MemoryRouter />);
    addTodos(["Demo"]);
    const text = screen.getByText(/Demo/i);
   fireEvent.click(text)
   expect(text).toHaveClass('todo-item-active');

  });
});
