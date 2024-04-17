import React from "react";
import { render } from "@testing-library/react";
import StyledItem from "./StyledItem";
import "@testing-library/jest-dom";

describe("StyledItem component", () => {
  test("renders text correctly", () => {
    const { getByText } = render(<StyledItem text="test" />);
    expect(getByText("test")).toBeInTheDocument();
  });

  test("replaces hyphens with spaces in text", () => {
    const { getByText } = render(<StyledItem text="test-text" />);
    expect(getByText("test text")).toBeInTheDocument();
  });

  test("applies type-specific class when isType is true", () => {
    const { container } = render(<StyledItem text="water" isType />);
    expect(container.firstChild).toHaveClass("water");
  });

  test("does not apply type-specific class when isType is false", () => {
    const { container } = render(<StyledItem text="water" />);
    expect(container.firstChild).not.toHaveClass("water");
  });
});
