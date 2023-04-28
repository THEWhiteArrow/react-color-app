import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MiniPalette from './MiniPalette'
import { createUseStyles } from 'react-jss'

const styles = createUseStyles({
    root: {
        backgroundColor: 'blue',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    nav: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        color: 'white'
    },
    palettes: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3,30%)',
        gridGap: '5%'
    }
})

export default function PaletteList(props) {


    const classes = styles()
    const { palettes } = props
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1>React Colors</h1>
                </nav>
                <div className={classes.palettes}>
                    {palettes.map(palette => (
                        <MiniPalette key={palette.id} {...palette} />
                    ))}
                </div>
            </div>
        </div>
    )

}

