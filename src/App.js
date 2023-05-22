import React, { Component } from "react";
import { Route } from 'react-router-dom';
import { Routes } from "react-router-dom";
import PaletteWithProps from "./PalleteWithProps";
import PaletteList from "./PaletteList";
import seedColors from "./seedColors";
import SingleColorPaletteFunction from "./SingleColorPaletteFunction";
import NewPaletteForm from "./NewPaletteForm";
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      palettes: seedColors
    }
  }
  savePalette = (newPalette) => {
    this.setState(st => ({ palettes: [...st.palettes, newPalette] }))
  }
  render() {
    return (

      <Routes>
        <Route exact path="/" element={<PaletteList palettes={this.state.palettes} />} />
        <Route path="/palette/new" exact element={<NewPaletteForm palettes={this.state.palettes} handleSave={this.savePalette} />} />
        <Route path="/palette/:id" element={<PaletteWithProps palettes={this.state.palettes} />} />
        <Route path="/palette/:id/:colorId" element={<SingleColorPaletteFunction palettes={this.state.palettes} />} />
      </Routes>
    );
  }
}




export default App;