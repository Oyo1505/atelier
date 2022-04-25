import React, { useContext, useState } from "react";
import "../../asset/css/searchBar.css";
import { StoreContext } from "../../utils/StroreContext";
const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const { filterPlayer } = useContext(StoreContext);

  const updateData = (e) => {
    setSearchValue(e.target.value);
    filterPlayer(e.target.value);
  };

  return (
    <div id="search-bar">
      <input
        id="input-search-bar"
        type="search"
        placeholder="Rechercher un joueur"
        onChange={updateData}
        value={searchValue}
      />
    </div>
  );
};

export default SearchBar;
