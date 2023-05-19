import React, { Component } from 'react'

export default class PaletteFooter extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { paletteName, emoji, classes } = this.props
        return (
            <footer className={classes.footer}>
                {paletteName}
                <span className={classes.emoji}>{emoji}</span>
            </footer>
        )
    }
}
