import React, { Component } from 'react'
import { ChromePicker } from 'react-color';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
export default class DrawerPaletteForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: 'purple',
        }
    }
    updateColor = (color) => this.setState({ color: color.hex })
    addNewColor = () => this.props.addNewColor(this.state.color)
    render() {
        return (
            <div>
                <Typography variant="h6">Design Your Palette</Typography>
                <Button variant='contained' color='secondary'>Clear Palette</Button>
                <Button variant='contained' color='primary'>Random Color</Button>
                <ChromePicker color={this.state.color} onChange={this.updateColor} />
                <Button onClick={this.addNewColor} variant='contained' color='primary' style={{ transition: 'none', backgroundColor: this.state.color }} >Add Color</Button>
            </div>
        )
    }
}
