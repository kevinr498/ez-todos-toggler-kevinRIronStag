import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

it("renders the number of completed todos (90 at initial load) in the heading", async () => {
  render(<App />);
  await screen.findAllByText("90/200");

  await screen.findAllByRole("checkbox");
  // Wait for the todos to load

  const heading = screen.getAllByRole("heading", { level: 1 });
  screen.findAllByText("90/200");
});

it("renders the number of completed todos (91 after one todo is checked) in the heading", () => {
  render(<App />);

  const checkbox = screen.getAllByRole("checkbox");
  fireEvent.click(checkbox, InputEvent);

  screen.getAllByRole("heading", { level: 1 });
  screen.findAllByText("91");

  // TODO: Write a test that checks that the number of completed todos is 91 after one todo is checked
  // Hint: use userEvent.click() to check a todo
  // Hint: use screen.getByRole("heading") to get the heading
  // Hint: use expect().toHaveTextContent() to check the heading text
});
