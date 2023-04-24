import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MiniPalette from './MiniPalette'

export default class PaletteList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { palettes } = this.props
        return (
            <div className='PaletteList'>
                <MiniPalette />
                <h1>React Colors</h1>
                {palettes.map(palette => (
                    <p key={palette.id}>
                        <Link key={palette.id} to={`/palette/${palette.id}`} >{palette.paletteName}</Link>
                    </p>
                ))}
            </div>
        )
    }
}

