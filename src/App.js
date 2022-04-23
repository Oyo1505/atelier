import "./App.css";
import { Routes, Route } from "react-router-dom";
import ListPlayers from "./components/ListPlayers/ListPlayers";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ListPlayers />} />
      </Routes>
    </div>
  );
}

export default App;
