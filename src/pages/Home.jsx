import React from "react";
import ListPlayers from "../components/ListPlayers";
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
