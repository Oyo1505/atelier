import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import ListPlayers from "../components/ListPlayers";
afterEach(cleanup);
const players = {
  players: [
    {
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
    },
    {
      id: 95,
      firstname: "Venus",
      lastname: "Williams",
      shortname: "V.WIL",
      sex: "F",
      country: {
        picture: "https://www.crwflags.com/FOTW/images/u/us-1912.gif",
        code: "USA",
      },
      picture:
        "https://data.latelier.co/training/tennis_stats/resources/Venus.webp",
      data: {
        rank: 52,
        points: 1105,
        weight: 74000,
        height: 185,
        age: 38,
        last: [0, 1, 0, 0, 1],
      },
    },
  ],
};

describe("ListPlayers", () => {});
