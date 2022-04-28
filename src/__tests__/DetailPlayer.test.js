import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";

describe("DetailPayer", () => {
  const DetailPlayer = ({ type, text }) => {
    return (
      <div className="details-players">
        <p className="type" role="paragraph" data-testid="type-details">
          {type}
        </p>
        <p className="text" role="paragraph" data-testid="text-details">
          {text}
        </p>
      </div>
    );
  };
  test("it render correctly", () => {
    render(<DetailPlayer type={"RANK"} text={"#1"} />);
    const type = screen.getByText("RANK");
    const text = screen.getByText("#1");
    expect(type).toBeTruthy();
    expect(text).toBeTruthy();
  });
  test("Should render same text passsed in type prop", async () => {
    render(<DetailPlayer type={"RANK"} text={"#1"} />);
    const type = screen.getByText("RANK");
    expect(type).toBeInTheDocument();
  });
  test("Should render same text passsed in text prop", async () => {
    render(<DetailPlayer type={"RANK"} text={"#1"} />);
    const text = screen.getByText("#1");
    expect(text).toBeInTheDocument();
  });
  test("Should render undefined passsed in text prop", async () => {
    render(<DetailPlayer type={"RANK"} text={""} />);
    const text = screen.getByTestId("text-details");
    expect(text.value).toBe(undefined);
  });
  test("Should render undefined passsed in type prop", async () => {
    render(<DetailPlayer type={""} text={"test"} />);
    const type = screen.getByTestId("type-details");
    expect(type.value).toBe(undefined);
  });

  test("Should render the length of elements paragraph", async () => {
    render(<DetailPlayer type={"test.jpg"} text={"USA"} />);

    const paragraphElements = screen.getAllByRole("paragraph", {
      type: "test.jpg",
      text: "USA",
    });

    expect(paragraphElements.length).toBe(2);
  });
});
