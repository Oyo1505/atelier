import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import DetailPlayer from "../components/DetailPlayer/index";

describe("DetailPayer", () => {
  test("Should render same text passsed in type prop", async () => {
    render(
      <DetailPlayer type={"RANK"} text={"#1"}>
        <div className="details-players">
          <p className="type"></p>
          <p className="text"> </p>
        </div>
      </DetailPlayer>
    );
    const type = screen.getByText("RANK");
    expect(type).toBeInTheDocument();
  });
  test("Should render same text passsed in text prop", async () => {
    render(
      <DetailPlayer type={"RANK"} text={"#1"}>
        <div className="details-players">
          <p className="type"></p>
          <p className="text"> </p>
        </div>
      </DetailPlayer>
    );
    const text = screen.getByText("#1");
    expect(text).toBeInTheDocument();
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
