import React from "react";
import ListPlayers from "../components/ListPlayers/ListPlayers";
import SearchBar from "../components/SearchBar";
import "../asset/css/home.css";
const Home = () => {
  return (
    <div id="home">
      <SearchBar />
      <ListPlayers />
    </div>
  );
};

export default Home;
