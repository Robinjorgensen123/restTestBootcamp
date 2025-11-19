import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import NumberButton from "./increment";

describe("NumberButton", () => {
  test("visar 0 från start", () => {
    render(<NumberButton />);

    const span = screen.getByText("0");
    expect(span).toBeInTheDocument();
  });

  test("ökar värdet med 1 när man klickar", () => {
    render(<NumberButton />);

    const button = screen.getByRole("button", { name: "Add" });

    fireEvent.click(button);

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("ökar vidare vid flera klick", () => {
    render(<NumberButton />);

    const button = screen.getByRole("button", { name: "Add" });

    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    expect(screen.getByText("3")).toBeInTheDocument();
  });
});
