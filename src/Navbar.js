import React, { Component } from 'react'
import { Select, MenuItem, Snackbar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import './Navbar.css'


export default class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            format: 'hex',
            open: false,
        }
    }
    handleFormatChange = evt => {
        this.setState({ format: evt.target.value, open: true })
        this.props.handleChange(evt.target.value)
    }

    closeSnackbar = () => {
        this.setState({ open: false })
    }

    render() {
        const { level, changeLevel } = this.props
        const { format } = this.state
        return (
            <header className='Navbar'>
                <div className='logo'>
                    <a href="#">reactcolorpicker</a>
                </div>
                <div className='slider-container'>
                    <span>Level: {level}</span>
                    <div className='slider'>
                        <Slider
                            defaultValue={this.props.level}
                            min={100}
                            max={900}
                            step={100}
                            onChange={this.props.changeLevel}
                        />
                    </div>
                </div>
                <div className='select-container'>
                    <Select value={format} onChange={this.handleFormatChange}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgb(255,255,255,1.0)</MenuItem>
                    </Select>
                </div>
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    open={this.state.open}
                    autoHideDuration={3000}
                    message={<span id="message-id">Format Changed!</span>}
                    ContentProps={{ "aria-describedby": "message-id" }}
                    onClose={this.closeSnackbar}
                    action={[
                        <IconButton
                            onClick={this.closeSnackbar}
                            color='inherit'
                            key='close'
                            aria-label='close'
                        >
                            <CloseIcon />
                        </IconButton>
                    ]}
                />
            </header>
        )
    }
}
