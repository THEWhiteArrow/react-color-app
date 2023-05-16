import { useParams } from 'react-router-dom'
import SingleColorPalette from './SingleColorPalette'
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

export default function SingleColorPaletteFunction(props) {
    const { id, colorId } = useParams()

    function findPalette(id) {
        return seedColors.find(function (palette) {
            return palette.id === id;
        })
    }

    return (
        <SingleColorPalette palette={generatePalette(findPalette(id))} id={id} colorId={colorId} />
    )
}