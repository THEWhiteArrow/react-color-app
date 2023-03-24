import React, { Component } from 'react'
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import './Navbar.css'


export default class Navbar extends Component {

    render() {
        const { level, changeLevel } = this.props
        return (
            <header className='Navbar'>
                <div className='logo'>
                    <a href="#">reactcolorpicker</a>
                </div>
                <div className='slider-container'>
                    <span>Level: {level}</span>
                    <div className='slider'>
                        <Slider defaultValue={this.props.level} min={100} max={900} step={100} onChange={this.props.changeLevel} />
                    </div>
                </div>
            </header>
        )
    }
}
