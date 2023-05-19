import React, { Component } from 'react'

export default class MainPaletteForm extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        const { colors } = this.props
        return (
            <div>

                <h1>MainPaletteForm</h1>
                <ul>
                    {colors.map(color => <li style={{ backgroundColor: color }} key={color}>{color}</li>)}
                </ul>
            </div>
        )
    }
}
