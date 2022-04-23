import React from "react";
import ListPlayers from "./ListPlayers/ListPlayers";
import SearchBar from "../components/SearchBar";
const Home = () => {
  return (
    <>
      <SearchBar />
      <ListPlayers />
    </>
  );
};

export default Home;
