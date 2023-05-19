import React, { Component } from 'react'
import { ChromePicker } from 'react-color';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
export default class DrawerPaletteForm extends Component {
    render() {
        return (
            <div>
                <Typography variant="h6">Design Your Palette</Typography>
                <Button variant='contained' color='secondary'>Clear Palette</Button>
                <Button variant='contained' color='primary'>Random Color</Button>
                <ChromePicker color={'purple'} onChangeComplete={(c) => console.log(c)} />
                <Button variant='contained' color='primary'>Add Color</Button>
            </div>
        )
    }
}
