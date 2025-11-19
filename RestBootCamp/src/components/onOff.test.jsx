import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Toggle from "./onOff.jsx";
import "@testing-library/jest-dom";

describe("Toggle", () => {
  test("visar `on` från början", () => {
    render(<Toggle />);
    expect(screen.getByRole("button")).toHaveTextContent("on");
  });

  test("växlar till `off` när man klickar", () => {
    render(<Toggle />);
    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(button).toHaveTextContent("off");
  });

  test("växlar tillbaka till `on` vid ytterliggare klick", () => {
    render(<Toggle />);
    const button = screen.getByRole("button");

    fireEvent.click(button);
    fireEvent.click(button);

    expect(button).toHaveTextContent("on");
  });
});
