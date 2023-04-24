import React from 'react'
import { createUseStyles } from 'react-jss'


const styles = createUseStyles({
    main: {
        backgroundColor: "purple",
        border: "3px solid teal",
    },
    secondary: {
        backgroundColor: 'pink',
        "& h1": {
            color: 'white',
            "& span": {
                color: "yellow"
            }
        }
    }
})

function MiniPalette(props) {
    const classes = styles()
    console.log(classes)
    return (
        <div className={classes.main}>
            <h1>MiniPalette</h1>
            <section className={classes.secondary}>
                <h1>Mini Palette<span>sdasd</span></h1>
                <span>sdasdas</span>
            </section>
        </div>
    )

}


export default MiniPalette