import React, { useContext } from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import CardPlayer from "../components/CardPlayer";
import { StoreContext, StoreProviderWrapper } from "../utils/StroreContext";
afterEach(cleanup);

const ListPlayersComponents = () => {
  const { players } = useContext(StoreContext);
  if (!players) return <p>Loarding</p>;
  return (
    <div id="list-players">
      {players.map((player) => (
        <CardPlayer key={player.id} player={player} />
      ))}
    </div>
  );
};
describe("ListPlayers", () => {
  test("list All players", () => {
    render(
      <StoreProviderWrapper>
        <ListPlayersComponents />
      </StoreProviderWrapper>
    );
  });
});
