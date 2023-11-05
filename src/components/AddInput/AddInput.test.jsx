import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "./AddInput";

describe("Add Input Component", () => {
  it("Should render the component", () => {
    render(<AddInput todos={[]} setTodos={jest.fn()} />);
    const input = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(input).toBeInTheDocument();
  });
  it("Should render the component", () => {
    render(<AddInput todos={[]} setTodos={jest.fn()} />);
    const input = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(input, { target: { value: "Demo" } });
    expect(input.value).toEqual("Demo");
  });
  it("Should render the component after button click", () => {
    render(<AddInput todos={[]} setTodos={jest.fn()} />);
    const input = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(input, { target: { value: "Demo" } });
    const btn = screen.getByRole("button", { name: "Add" });
    fireEvent.click(btn);
    fireEvent.change(input, { target: { value: "" } });
    expect(input.value).toBeFalsy();
  });
});
