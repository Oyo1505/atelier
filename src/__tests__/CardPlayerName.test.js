import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";

describe("CardPlayerName", () => {
  const CardPlayerName = ({ lastName, firstName }) => {
    return (
      <h3 data-testid="player-name">
        {firstName} {lastName}
      </h3>
    );
  };
  test("it render correctly", async () => {
    render(<CardPlayerName lastName={"Rol"} firstName={"Martin"} />);
    const headingModalElements = screen.getAllByRole("heading");
    expect(headingModalElements).toBeTruthy();
  });
  test("Should render same text passsed in firstName and lastName props", async () => {
    render(<CardPlayerName lastName={"Rol"} firstName={"Martin"} />);
    const lastName = screen.getByText("Martin Rol");
    expect(lastName).toBeInTheDocument();
  });
  test("Should render the length of elements heading", async () => {
    render(<CardPlayerName lastName={"Rol"} firstName={"Martin"} />);
    const headingModalElements = screen.getAllByRole("heading");
    expect(headingModalElements.length).toBe(1);
  });

  test("Should render empty text passsed in firstName and lastName props", async () => {
    render(<CardPlayerName lastName={""} firstName={""} />);
    const headingModalElements = screen.getByTestId("player-name");
    expect(headingModalElements.value).toBe(undefined);
  });
});
