import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { expect } from "vitest";
import App from "./App";

it("renders the number of completed todos (90 at initial load) in the heading", async () => {
  render(<App />);

  await screen.findAllByText("90/200");
  await screen.findAllByRole("checkbox");
  // Wait for the todos to load

  const heading = screen.getAllByRole("heading", { level: 1 });
  screen.findAllByText("90/200");
  expect(heading).toHaveTextContent("90 / 200 completed");
});

it("renders the number of completed todos (91 after one todo is checked) in the heading", async () => {
  // render(<App />);

  // const checkbox = screen.getAllByRole("checkbox");

  // fireEvent.click(checkbox, InputEvent);
  // screen.getAllByRole("heading", { level: 1 });
  // screen.findAllByText("91");

  // TODO: Write a test that checks that the number of completed todos is 91 after one todo is checked
  // Hint: use userEvent.click() to check a todo
  // Hint: use screen.getByRole("heading") to get the heading
  // Hint: use expect().toHaveTextContent() to check the heading text

  const user = userEvent.setup();
  render(<App />);

  const checkboxes = await screen.findAllByRole("checkbox");
  await user.click(checkboxes[0]);

  const heading = screen.getByRole("heading");
  expect(heading).toHaveTextContent("91/200");
});
