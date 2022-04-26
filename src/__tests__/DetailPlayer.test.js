import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import DetailPlayer from "../components/DetailPlayer/index";

test("Should render same text passsed in title prop", async () => {
  render(
    <DetailPlayer type={"RANK"} text={"#1"}>
      <div className="details-players">
        <p className="type"></p>
        <p className="text"> </p>
      </div>
    </DetailPlayer>
  );
  const type = screen.getByText("RANK");
  const text = screen.getByText("#1");
  expect(type).toBeInTheDocument();
  expect(text).toBeInTheDocument();
});
