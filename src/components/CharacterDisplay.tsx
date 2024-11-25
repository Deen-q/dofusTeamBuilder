/* Dofus Team Builder c: */

import { useContext } from "react"
import CharacterContext from "../context/CharacterContext"

export default function CharacterDisplay() {
    const { characterSelected } = useContext(CharacterContext) || {};

    return (
        <div>
            <h2>{characterSelected?.className}</h2> {/* fix ? if needed*/}
            <p>Qualities: {characterSelected?.qualities.join(", ")}</p>
        </div>
    )
}