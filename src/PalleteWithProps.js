import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import { useParams } from "react-router-dom";

function PaletteWithProps() {
    const { id } = useParams();

    function findPalette(id) {
        return seedColors.find(function (palette) {
            return palette.id === id;
        })
    }

    return <Palette palette={generatePalette(findPalette(id))} />
}

export default PaletteWithProps