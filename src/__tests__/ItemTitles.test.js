import React from "react";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
const ItemTitlesComponent = ({ year, numberOfTrophy, locations }) => {
  return (
    <>
      <div className="year-titles" data-testid="year-titles">
        <span className="date">
          <span>{year}</span> - {numberOfTrophy}
        </span>
        {locations.map((location, i) => (
          <p key={i} role="paragraph" data-testid={`location-${i}`}>
            {location}
          </p>
        ))}
      </div>
    </>
  );
};
describe("ItemTitles", () => {
  const location = [
    "ATP Masters 1000 Paris",
    "Winbledon (outdoor/glrass",
    "Roland Garros",
    "Belgrade",
  ];
  test("task shold not have completed class when initially rendered", async () => {
    render(
      <ItemTitlesComponent
        key={516}
        year={2020}
        numberOfTrophy={3}
        locations={location}
      />
    );

    const divElement = screen.getByText(/2020/);
    expect(divElement).not.toHaveClass("data");
  });
  test("task should have completed class when initially rendered", async () => {
    render(
      <ItemTitlesComponent
        key={516}
        year={2020}
        numberOfTrophy={3}
        locations={location}
      />
    );

    const divElement = screen.getByText(/2020/);
    expect(divElement).not.toHaveClass("year");
  });
  test("task should have completed class when initially rendered", async () => {
    render(
      <ItemTitlesComponent
        key={516}
        year={2020}
        numberOfTrophy={3}
        locations={location}
      />
    );

    const divElement = screen.getByTestId("year-titles");
    expect(divElement).toHaveClass("year-titles");
  });

  test("task should have completed text content initially rendered", async () => {
    render(
      <ItemTitlesComponent
        key={516}
        year={2020}
        numberOfTrophy={3}
        locations={location}
      />
    );

    const divElement = screen.getByTestId("location-1");
    expect(divElement).toHaveTextContent("Winbledon (outdoor/glrass");
  });
  test("task not should have completed text content initially rendered", async () => {
    render(
      <ItemTitlesComponent
        key={516}
        year={2020}
        numberOfTrophy={3}
        locations={location}
      />
    );

    const divElement = screen.getByTestId("location-2");
    expect(divElement).not.toHaveTextContent("Winbledon (outdoor/glrass");
  });
  test("task should render the element in the document", async () => {
    render(
      <ItemTitlesComponent
        key={516}
        year={2020}
        numberOfTrophy={3}
        locations={location}
      />
    );

    const divElement = await screen.findByTestId("location-2");
    expect(divElement).toBeInTheDocument();
  });
  test("task should render the elements length in the document", async () => {
    render(
      <ItemTitlesComponent
        key={516}
        year={2020}
        numberOfTrophy={3}
        locations={location}
      />
    );

    const divElements = await screen.findAllByRole("paragraph");
    expect(divElements.length).toBe(4);
  });
  test("it render correctly", async () => {
    render(
      <ItemTitlesComponent
        key={516}
        year={2020}
        numberOfTrophy={3}
        locations={location}
      />
    );

    const divElements = await screen.findAllByRole("paragraph");
    expect(divElements).toBeTruthy();
  });
});
