import React from "react";
import ListPlayers from "../ListPlayers/ListPlayers";
import SearchBar from "../SearchBar";
import "../../asset/css/home.css";
const Home = () => {
  return (
    <div id="home">
      <SearchBar />
      <ListPlayers />
    </div>
  );
};

export default Home;
