import React, { Component } from 'react'
import { Select, MenuItem } from '@mui/material'
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import './Navbar.css'


export default class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            format: 'hex'
        }
    }
    handleChange = evt => {
        this.setState({ format: evt.target.value })
        this.props.handleChange(evt.target.value)
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
                    <Select value={format} onChange={this.handleChange}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgb(255,255,255,1.0)</MenuItem>
                    </Select>
                </div>
            </header>
        )
    }
}
