import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import CardImagePlayer from "../components/CardImagePlayer";

describe("CardImagePlayer", () => {
  test("Should render same text passsed in name prop", async () => {
    render(<CardImagePlayer image={"test.jpg"} name={"USA"} />);

    const name = screen.getByAltText("player-USA");
    expect(name).toBeInTheDocument();
  });

  test("Should render image element to be Truthy", async () => {
    render(<CardImagePlayer image={"test.jpg"} name={"USA"} />);

    const image = screen.getByTestId("image");
    expect(image).toBeTruthy();
  });
  test("Should render alt text with name prop  to be Truthy", async () => {
    render(<CardImagePlayer image={"test.jpg"} name={"USA"} />);

    const name = screen.getByAltText("player-USA");
    expect(name).toBeTruthy();
  });
  test("Should render class in the element card-image", async () => {
    render(<CardImagePlayer image={"test.jpg"} name={"USA"} />);

    const image = screen.getByTestId("card-image");

    expect(image).toHaveClass("card-image-player");
  });
  test("Should render Attribute in the element card-image", async () => {
    render(<CardImagePlayer image={"test.jpg"} name={"USA"} />);

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "test.jpg");
    expect(image).toHaveAttribute("alt", "player-USA");
  });
});
