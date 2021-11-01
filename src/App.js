import React from "react";
import "./index.css";
import Header from './components/header'
import { Typography } from '@mui/material';
import BackgroundImage from "./components/backgroundImage";
import SpaceShipDriverForm from "./components/callSpaceshipDriverForm";
function App() {
  return (
    <div className="App">
      <Header/>
      <div style={{marginTop:'80px'}}>
        <Typography align="center" fontSize="30px" variant="h3" component="h2">
          Entre com suas informações
        </Typography>
        <Typography style={{marginTop:'16px'}} align="center" fontSize="15px" variant="subtitle1">
          Entre com suas informações
        </Typography>
        <BackgroundImage/>
        <SpaceShipDriverForm/>
      </div>
    </div>
  );
}
export default App;