import React, { Component } from "react";
import { Route } from 'react-router-dom';
import { Routes } from "react-router-dom";
import PaletteWithProps from "./PalleteWithProps";
import PaletteList from "./PaletteList";
import seedColors from "./seedColors";

class App extends Component {

  render() {
    return (

      <Routes>
        <Route exact path="/" element={<PaletteList palettes={seedColors} />} />
        <Route path="/palette/:id" element={<PaletteWithProps />} />
        <Route path="/palette/:id/:colorId" element={<h1>Single color pahe</h1>} />
      </Routes>
    );
  }
}




export default App;