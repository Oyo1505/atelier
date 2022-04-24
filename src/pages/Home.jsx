import React, { useContext } from "react";
import ListPlayers from "../components/ListPlayers/ListPlayers";
import ModalPlayer from "../components/ModalPlayer/Modal";
import SearchBar from "../components/SearchBar";
import "../asset/css/home.css";

const Home = () => {
  return (
    <div id="home">
      <SearchBar />
      <ListPlayers />
      <ModalPlayer />
    </div>
  );
};

export default Home;
