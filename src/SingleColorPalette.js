import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import PaletteFooter from './PaletteFooter'
import { Link } from 'react-router-dom'


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
        const { paletteName, emoji, id } = this.props.palette
        return (
            <div className='SingleColorPalette Palette'>
                <Navbar handleChange={this.changeFormat} showingAllColors={false} />
                <div className='Palette-colors'>
                    {colorBoxes}
                    <div className='go-back ColorBox'>
                        <Link to={`/palette/${id}`} className='back-button' >Go Back</Link>
                    </div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        )
    }
}


