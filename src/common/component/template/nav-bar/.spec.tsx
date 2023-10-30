import React from "react";
import NavBar from "./index";
import { render, fireEvent } from "@testing-library/react";

describe("NavBarContainer", () => {
  test("renders without crashing", () => {
    render(<NavBar />);
  });

  test("renders with back button when hasBackButton is true", () => {
    const { getByText } = render(<NavBar hasBackButton={true} />);
    expect(getByText("back")).toBeInTheDocument();
  });

  test("does not render back button when hasBackButton is false", () => {
    const { queryByText } = render(<NavBar hasBackButton={false} />);
    expect(queryByText("back")).toBeNull();
  });

  test("renders icon when icon prop is provided", () => {
    const { getByText } = render(<NavBar icon="some-icon" />);
    expect(getByText("icon")).toBeInTheDocument();
  });

  test("calls onIconClick when the icon is clicked", () => {
    const mockOnIconClick = jest.fn();
    const { getByText } = render(<NavBar icon="some-icon" onIconClick={mockOnIconClick} />);
    const iconElement = getByText("icon");
    fireEvent.click(iconElement);
    expect(mockOnIconClick).toHaveBeenCalledTimes(1);
  });

  test("renders child components", () => {
    const { getByText } = render(
      <NavBar>
        <NavBar.Title>Test Title</NavBar.Title>
        <NavBar.Description>Test Description</NavBar.Description>
      </NavBar>
    );
    expect(getByText("Test Title")).toBeInTheDocument();
    expect(getByText("Test Description")).toBeInTheDocument();
  });
});
