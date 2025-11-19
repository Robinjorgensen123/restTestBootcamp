import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import NumberButton from "./decrement";

describe("NumberButton", () => {
  test("visar 0 från start", () => {
    render(<NumberButton />);

    const span = screen.getByText("0");
    expect(span).toBeInTheDocument();
  });

  test("minskar värdet med 1 när man klickar", () => {
    render(<NumberButton />);

    const button = screen.getByRole("button", { name: "Remove" });

    fireEvent.click(button);

    expect(screen.getByText("-1")).toBeInTheDocument();
  });

  test("minskar vidare vid flera klick", () => {
    render(<NumberButton />);

    const button = screen.getByRole("button", { name: "Remove" });

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    expect(screen.getByText("-3")).toBeInTheDocument();
  });
});
