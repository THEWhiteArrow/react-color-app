import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import PaletteFooter from './PaletteFooter'

export default class SingleColorPalette extends Component {
    constructor(props) {
        super(props)
        this._shades = this.gatherShades(this.props.palette, this.props.colorId)
        this.state = { format: 'hex' }

    }
    gatherShades = (palette, colorId) => {
        let shades = []
        let allColors = palette.colors;

        for (let key in allColors)
            shades = shades.concat(allColors[key].filter(color => color.id == colorId))

        return shades.slice(1)
    }
    changeFormat = format => this.setState({ format })
    render() {
        const { format } = this.state
        const colorBoxes = this._shades.map(color => (
            <ColorBox key={color.name} name={color.name} background={color[format]} showLink={false} />
        ))
        const { paletteName, emoji } = this.props.palette
        return (
            <div className='Palette'>
                <Navbar handleChange={this.changeFormat} showingAllColors={false} />
                <div className='Palette-colors'>
                    {colorBoxes}
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}


