import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import { useParams } from "react-router-dom";

function PaletteWithProps(props) {
    const { id } = useParams();
    const { palettes } = props
    function findPalette(id) {
        return palettes.find(function (palette) {
            return palette.id === id;
        })
    }

    return <Palette palette={generatePalette(findPalette(id))} />
}

export default PaletteWithProps