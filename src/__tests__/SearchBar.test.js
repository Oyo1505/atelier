import React, { useContext } from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { StoreContext, StoreProviderWrapper } from "../utils/StroreContext";
afterEach(cleanup);
describe("SeacrBar", () => {
  const SearchBarCompenent = () => {
    const { filterPlayer } = useContext(StoreContext);

    const updateData = (e) => {
      filterPlayer(e.target.value);
    };

    return (
      <div id="search-bar">
        <input
          id="input-search-bar"
          data-testid="input-search-bar"
          type="search"
          placeholder="Rechercher un joueur"
          onChange={updateData}
          value="test"
        />
      </div>
    );
  };
  test("it render correctly", () => {
    const { queryByPlaceholderText, queryByTestId } = render(
      <StoreProviderWrapper>
        <SearchBarCompenent />
      </StoreProviderWrapper>
    );
    expect(queryByPlaceholderText("Rechercher un joueur")).toBeTruthy();
    expect(queryByTestId("input-search-bar")).toBeTruthy();
  });
  test("render search input ", () => {
    render(
      <StoreProviderWrapper>
        <SearchBarCompenent />
      </StoreProviderWrapper>
    );
    const searchInputElement = screen.getByTestId("input-search-bar");
    expect(searchInputElement).toBeInTheDocument();
    expect(searchInputElement).toHaveAttribute("type", "search");
  });
  test("render the placeholder in the input search ", () => {
    render(
      <StoreProviderWrapper>
        <SearchBarCompenent />
      </StoreProviderWrapper>
    );
    const searchInputElement = screen.getByTestId("input-search-bar");
    expect(searchInputElement).toHaveAttribute(
      "placeholder",
      "Rechercher un joueur"
    );
  });

  test("pass search to test empty input value", async () => {
    const { queryByPlaceholderText } = render(
      <StoreProviderWrapper>
        <SearchBarCompenent />
      </StoreProviderWrapper>
    );
    const searchInput = queryByPlaceholderText("Rechercher un joueur");
    searchInput.value = "";

    expect(searchInput.value).toBe("");
  });
});
