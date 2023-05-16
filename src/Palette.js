import React, { Component } from 'react';
import ColorBox from './ColorBox';
import 'rc-slider/assets/index.css';
import './Palette.css'
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500,
            format: 'hex'
        }
    }

    changeLevel = level => this.setState({ level })
    changeFormat = format => {
        this.setState({ format })
    }

    render() {
        const { colors, paletteName, emoji, id } = this.props.palette
        const { level, format } = this.state
        const colorBoxes = this.props.palette.colors[this.state.level]
            .map((color, i) =>
                <ColorBox key={color.id} background={color[format]} name={color.name} moreUrl={`/palette/${id}/${color.id}`} showLink={true} />)
        return (

            <div className='Palette'>
                <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} showingAllColors={true} />
                <div className='Palette-colors'>
                    {colorBoxes}
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}

export default Palette
