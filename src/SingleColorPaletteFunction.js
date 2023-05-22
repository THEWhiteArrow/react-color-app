import { useParams } from 'react-router-dom'
import SingleColorPalette from './SingleColorPalette'
import { generatePalette } from "./colorHelpers";

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
    },

})


export default function SingleColorPaletteFunction(props) {
    const { id, colorId } = useParams()
    const { palettes } = props

    function findPalette(id) {
        return palettes.find(function (palette) {
            return palette.id === id;
        })
    }

    return (
        <SingleColorPalette palette={generatePalette(findPalette(id))} id={id} colorId={colorId} classes={styles()} />
    )
}