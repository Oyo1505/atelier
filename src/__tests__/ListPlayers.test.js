import React, { useContext } from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import ListPlayers from "../components/ListPlayers";
import { StoreContext, StoreProviderWrapper } from "../utils/StroreContext";

afterEach(cleanup);

const ListPlayersComponents = () => {
  <StoreProviderWrapper>
    <ListPlayers />
  </StoreProviderWrapper>;
};
describe("ListPlayers", () => {
  test("list All players", () => {
    render(<ListPlayersComponents />);
  });
});
