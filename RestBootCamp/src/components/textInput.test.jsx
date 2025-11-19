import { describe, test, expect } from "vitest";
import { render, screen, firstEvent, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import TextInputCapitalize from "./textInput.jsx";

describe("TextInputCapitalize", () => {
  test("ser till att första bokstaven blir stor när användaren skriver", () => {
    render(<TextInputCapitalize />);

    const input = screen.getByLabelText("text-input");

    fireEvent.change(input, { target: { value: "Hej" } });

    expect(input).toHaveValue("Hej");
  });

  test("visar inget felmeddelande när bara bokstäver skrivs", () => {
    render(<TextInputCapitalize />);

    const input = screen.getByLabelText("text-input");

    fireEvent.change(input, { target: { value: "abc" } });

    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  test("visar felmeddelande när något annat än bokstäver skrivs", () => {
    render(<TextInputCapitalize />);
    const input = screen.getByLabelText("text-input");

    fireEvent.change(input, { target: { value: "abc1" } });

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Endast bokstäver är tillåtna"
    );
  });
});
