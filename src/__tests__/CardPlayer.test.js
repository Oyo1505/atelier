import React, { useContext } from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import CardPlayer from "../components/CardPlayer";
import CardContent from "../components/CardContent";
import CardImagePlayer from "../components/CardImagePlayer";
import { StoreContext, StoreProviderWrapper } from "../utils/StroreContext";

afterEach(cleanup);

const CardPlayerComponent = ({ player }) => {
  <StoreProviderWrapper>
    <CardPlayerComponent player={player} />
  </StoreProviderWrapper>;
};

describe("CardPlayer", () => {
  let player = {
    id: 52,
    firstname: "Novak",
    lastname: "Djokovic",
    shortname: "N.DJO",
    sex: "M",
    country: {
      picture:
        "https://data.latelier.co/training/tennis_stats/resources/Serbie.png",
      code: "SRB",
    },
    picture:
      "https://data.latelier.co/training/tennis_stats/resources/Djokovic.png",
    data: {
      rank: 2,
      points: 2542,
      weight: 80000,
      height: 188,
      age: 31,
      last: [1, 1, 1, 1, 1],
    },
  };

  test("test on CardPlayer click", () => {
    render(<CardPlayerComponent player={player} />);
  });
});
