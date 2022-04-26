import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import PlayerNameModal from "../components/PlayerNameModal";

test("Should render same text passsed in firstName and lastName props", async () => {
  render(<PlayerNameModal lastName={"Rol"} firstName={"Martin"} />);
  const lastName = screen.getByText("Rol");
  const firstName = screen.getByText("Martin");
  expect(firstName).toBeInTheDocument();
  expect(lastName).toBeInTheDocument();
});

test("Should render role in firstName and lastName props", async () => {
  render(<PlayerNameModal lastName={"Rol"} firstName={"Martin"} />);

  const headingModalElements = screen.getAllByRole("heading", {
    lastName: "Rol",
    firstName: "Martin",
  });
  expect(headingModalElements[0]).toBeInTheDocument();
  expect(headingModalElements[1]).toBeInTheDocument();
});

test("Should render the length of elements heading", async () => {
  render(<PlayerNameModal />);

  const headingModalElements = screen.getAllByRole("heading");
  expect(headingModalElements.length).toBe(2);
});
