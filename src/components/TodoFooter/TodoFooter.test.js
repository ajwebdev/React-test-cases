import { render, screen } from "@testing-library/react";
import TodoFooter from "./TodoFooter";
import { BrowserRouter as MemoryRouter } from "react-router-dom";

const MockTodoFoooter = ({ numberOfIncompleteTasks }) => {
  return (
    <MemoryRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </MemoryRouter>
  );
};

test("Should render the incomplete tasks", () => {
  render(<MockTodoFoooter numberOfIncompleteTasks={1} />);
  const text = screen.getByText(/1 task left/i);
  expect(text).toBeInTheDocument();
});

test("Should render the incomplete tasks", () => {
  render(<MockTodoFoooter numberOfIncompleteTasks={2} />);
  const text = screen.getByText(/2 tasks left/i);
  expect(text).toBeInTheDocument();
});
test("Should render the incomplete tasks", () => {
  render(<MockTodoFoooter numberOfIncompleteTasks={1} />);
  const text = screen.queryByText("1 tasks left");
  expect(text).not.toBeInTheDocument();
});
