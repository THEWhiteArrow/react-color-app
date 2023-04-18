import React, { Component } from "react";
import { Route } from 'react-router-dom';
import { Routes } from "react-router-dom";
import Sth from "./Sth";
import PaletteWithProps from "./PalleteWithProps";

class App extends Component {

  render() {
    return (

      <Routes>
        <Route exact path="/" element={<h1>Palette list goes here</h1>} />
        <Route path="/palette/:id" element={<PaletteWithProps />} />
      </Routes>
    );
  }
}




export default App;