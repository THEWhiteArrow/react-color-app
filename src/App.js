import React, { Component } from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import { Route } from 'react-router-dom';
import { Routes } from "react-router-dom";
class App extends Component {
  render() {
    console.log(generatePalette(seedColors[4]));
    return (
      <Routes>
        <Route exact path="/" element={<h1>Palette list goes here</h1>} />
        <Route path="/palette/:id" element={<h1>Invidaula Palette</h1>} />

        {/* <Palette palette={generatePalette(seedColors[4])} /> */}
      </Routes>
    );
  }
}

export default App;