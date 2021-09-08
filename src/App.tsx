import React, { useState } from "react";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Waldo from "./components/Waldo";
import SideCheck from "./components/SideCheck";
import Welcome from "./components/Welcome";
import Tooltip from "./components/Tooltip";

import charactersDatabase from "./utils/charactersDatabase";

function App() {
  const classes = useStyles();
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [characters, setCharacters] = useState(charactersDatabase);
  const [mouseXY, setMouseXY] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className={classes.theGrid}>
      <Welcome />
      <Tooltip />
      <Header gridName={classes.Header} />
      <SideCheck gridName={classes.SideCheck} />
      <Waldo gridName={classes.Waldo} />
      <Footer gridName={classes.Footer} />
    </div>
  );
}
const useStyles = makeStyles(() => ({
  theGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 7fr 0.5fr",
    gridTemplateRows: "0.3fr 7fr 0.1fr",
    gap: "0px 0px",
    gridTemplateAreas: `
      "Header Header Header"
      "SideCheck Waldo ."
      "Footer Footer Footer"
      `,
    minWidth: "1400px",
  },
  Header: { gridArea: "Header" },
  Waldo: { gridArea: "Waldo" },
  Footer: { gridArea: "Footer" },
  SideCheck: { gridArea: "SideCheck" },
}));

export default App;
