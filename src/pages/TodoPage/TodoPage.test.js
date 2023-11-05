import { render, screen } from "@testing-library/react";
import Todo from "./TodoPage";
import { BrowserRouter as MemoryRouter } from "react-router-dom";

const MockTodoFoooter = () => {
  return (
    <MemoryRouter>
      <Todo />
    </MemoryRouter>
  );
}; 


test("Should render the incomplete tasks", () => {
  render(<MockTodoFoooter />);
});
