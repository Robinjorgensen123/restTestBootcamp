import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Greeting from "./helloWorld.jsx";
import "@testing-library/jest-dom";

describe("Greeing", () => {
  test(`visar texten "Hello World"`, () => {
    render(<Greeting />);
    const text = screen.getByText("Hello World");

    expect(text).toBeInTheDocument();
  });
});
