import React, { Component } from 'react';
import ColorBox from './ColorBox';
import 'rc-slider/assets/index.css';
import './Palette.css'
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

import { createUseStyles } from 'react-jss';


const styles = createUseStyles({
    Palette: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',

    },
    colors: {
        height: '90%'
    },
    footer: {
        backgroundColor: 'white',
        height: '5vh',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        fontWeight: 'bold',
    },
    emoji: {
        fontSize: '1.5rem',
        margin: '0.6rem 1rem 1rem 1rem',
    },
    slider: {
        width: '340px !important',
        height: '15px',
        margin: '0 10px!important',
        display: 'inline - block',
    }
})



class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500,
            format: 'hex'
        }
    }

    changeLevel = level => this.setState({ level })
    changeFormat = format => {
        this.setState({ format })
    }

    render() {
        const { colors, paletteName, emoji, id } = this.props.palette
        const { level, format } = this.state
        const { classes } = this.props
        const colorBoxes = this.props.palette.colors[this.state.level]
            .map((color, i) =>
                <ColorBox key={color.id} background={color[format]} name={color.name} moreUrl={`/palette/${id}/${color.id}`} showLink={true} />)
        return (

            <div className={classes.Palette}>
                <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} showingAllColors={true} />
                <div className={classes.colors}>
                    {colorBoxes}
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} classes={classes} />
            </div>
        )
    }
}

export default (props) => <Palette {...props} classes={styles()} />
