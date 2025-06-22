import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoApp from "./TodoApp";
import { describe, expect, it } from "vitest";

describe("TodoApp", () => {
  it("should allow user to add a todo item", async () => {
    render(<TodoApp />);

    const input = screen.getByPlaceholderText(/할 일을 입력하세요/i);
    const button = screen.getByRole("button", { name: /추가/i });

    await userEvent.type(input, "리액트 공부");
    await userEvent.click(button);

    expect(screen.getByText("리액트 공부")).toBeInTheDocument();
  });

  it("should toggle todo completion on click", async () => {
    render(<TodoApp />);

    const input = screen.getByPlaceholderText(/할 일을 입력하세요/i);
    const button = screen.getByRole("button", { name: /추가/i });

    await userEvent.type(input, "코딩 테스트 준비");
    await userEvent.click(button);

    const todoItem = screen.getByText("코딩 테스트 준비");
    await userEvent.click(todoItem);

    expect(todoItem);
  });
});
