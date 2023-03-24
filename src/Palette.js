import React, { Component } from 'react';
import ColorBox from './ColorBox';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import './Palette.css'
import Navbar from './Navbar';

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500
        }
    }

    changeLevel = level => this.setState({ level })

    render() {
        const { colors } = this.props.palette
        const { level } = this.state
        const colorBoxes = this.props.palette.colors[this.state.level].map((color, i) => <ColorBox key={i} background={color.hex} name={color.name} />)
        return (

            <div className='Palette'>
                <Navbar level={level} changeLevel={this.changeLevel} />
                {/* NAVBAR GOES HERE */}
                <div className='Palette-colors'>
                    {colorBoxes}
                </div>
                {/* FOOTER */}
            </div>
        )
    }
}

export default Palette
