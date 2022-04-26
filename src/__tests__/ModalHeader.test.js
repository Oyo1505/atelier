import React, { useContext } from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { StoreContext, StoreProviderWrapper } from "../utils/StroreContext";
import ModalHeader from "../components/ModalHeader";
import PlayerNameModal from "../components/PlayerNameModal";
import Flag from "../components/Flag";
describe("ModalHeader", () => {
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
  const ModalHeaderComponent = () => {
    return (
      <div className="modal-header">
        <PlayerNameModal
          lastName={player.lastname}
          firstName={player.firstname}
        />
        <Flag flag={player.country.picture} codeCountry={player.country.code} />
      </div>
    );
  };
  test("render Modal Heeader", () => {
    render(
      <StoreProviderWrapper>
        <ModalHeaderComponent />
      </StoreProviderWrapper>
    );
  });
});
