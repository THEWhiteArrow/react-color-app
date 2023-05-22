import React, { Component } from 'react'
import DraggableColorBox from './DraggableColorBox'
import './MainPaletteForm.css'

export default class MainPaletteForm extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        const { colors } = this.props
        return (
            <div className='MainPaletteForm'>

                <h1>MainPaletteForm</h1>
                {
                    colors.map(
                        (color, i) =>
                            <DraggableColorBox key={color.name} name={color.name} color={color.color} />
                    )
                }

            </div>
        )
    }
}
