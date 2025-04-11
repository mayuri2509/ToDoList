import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todoinput from "../Components/Todoinput"; 

const setup = () => {
  render(<Todoinput />);
};
 test("shows input and Add Task button", () => {
  setup();
  expect(screen.getByPlaceholderText("Add Task")).toBeInTheDocument();
  expect(screen.getByText("Add Task")).toBeInTheDocument();
});

test("adds a task to the list", async () => {
  setup();
  const input = screen.getByPlaceholderText("Add Task");
  const button = screen.getByText("Add Task");
  await userEvent.type(input, "Learn Testing");
  await userEvent.click(button);
  expect(screen.getByText("Learn Testing")).toBeInTheDocument();
});

test("deletes a task from the list", async () => {
  setup();
  const input = screen.getByPlaceholderText("Add Task");
  const button = screen.getByText("Add Task");
  await userEvent.type(input, "Test Delete");
  await userEvent.click(button);
  const deleteButton = screen.getByText("Delete");
  await userEvent.click(deleteButton);
  expect(screen.queryByText("Test Delete")).not.toBeInTheDocument();
});

test("edits and updates a task", async () => {
  setup();
  const input = screen.getByPlaceholderText("Add Task");
  const button = screen.getByText("Add Task");
  await userEvent.type(input, "Initial Task");
  await userEvent.click(button);
  const editButton = screen.getByText("Edit");
  await userEvent.click(editButton);
  const editInput = screen.getByDisplayValue("Initial Task");
  await userEvent.clear(editInput);
  await userEvent.type(editInput, "Updated Task");
  const updateButton = screen.getByText("Update");
  await userEvent.click(updateButton);
  expect(screen.getByText("Updated Task")).toBeInTheDocument();
  expect(screen.queryByText("Initial Task")).not.toBeInTheDocument();
});
