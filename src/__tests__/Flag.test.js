import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import Flag from "../components/Flag/";

describe("Flag", () => {
  test("it render correctly", () => {
    render(<Flag flag={"test.jpg"} codeCountry={"USA"} />);
    const codeCountry = screen.getByText("USA");
    const flag = screen.getByText("USA");
    expect(codeCountry).toBeTruthy();
    expect(flag).toBeTruthy();
  });
  test("Should render same text passsed in codeCountry prop", async () => {
    render(<Flag flag={"test.jpg"} codeCountry={"USA"} />);

    const codeCountry = screen.getByText("USA");
    expect(codeCountry).toBeInTheDocument();
  });

  test("Should render role of the h2 ", async () => {
    render(<Flag flag={"test.jpg"} codeCountry={"USA"} />);

    const codeCountry = screen.getByRole("heading");
    expect(codeCountry).toBeInTheDocument();
  });
  test("Should render undefined passsed in codeCountry prop", async () => {
    render(<Flag flag={"test.jpg"} codeCountry={""} />);
    const codeCountry = screen.getByRole("heading");
    expect(codeCountry.value).toBe(undefined);
  });
  test("Should render role of img", async () => {
    render(<Flag flag={"test.jpg"} codeCountry={"USA"} />);

    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
  });
});
