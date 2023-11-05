import { render,screen } from "@testing-library/react";
import Header from "./Header";

describe("Render Title", () => {
  it("Should render the text", () => {
    render(<Header title="My header" />);
    const title = screen.getByRole("heading", { name: "My header" });
    expect(title).toBeInTheDocument();
  });
  it("Should render the text", async () => {
    render(<Header title="My header" />);
    const title = await screen.findByText(/My header/i);
    expect(title).toBeInTheDocument();
  });
  it("Should render the text",   () => {
    render(<Header title="My header" />);
    const title = screen.queryByText(/Dog/i);
    expect(title).not.toBeInTheDocument();
  });
});
 