import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import ModalImagePlayer from "../components/ModalImagePlayer";

describe("CardImagePlayer", () => {
  test("Should render same text passsed in name prop", async () => {
    render(<ModalImagePlayer image={"test.jpg"} name={"USA"} />);

    const name = screen.getByAltText("model-USA");
    expect(name).toBeInTheDocument();
  });

  test("Should render image element to be Truthy", async () => {
    render(<ModalImagePlayer image={"test.jpg"} name={"USA"} />);

    const image = screen.getByTestId("modal-image");
    expect(image).toBeTruthy();
  });
  test("Should render alt text with name prop  to be Truthy", async () => {
    render(<ModalImagePlayer image={"test.jpg"} name={"USA"} />);

    const name = screen.getByAltText("model-USA");
    expect(name).toBeTruthy();
  });
  test("Should render class in the element card-image", async () => {
    render(<ModalImagePlayer image={"test.jpg"} name={"USA"} />);

    const image = screen.getByTestId("modal-image");

    expect(image).toHaveClass("image-player-modal");
  });
  test("Should render Attribute in the element card-image", async () => {
    render(<ModalImagePlayer image={"test.jpg"} name={"USA"} />);

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "test.jpg");
    expect(image).toHaveAttribute("alt", "model-USA");
  });
});
