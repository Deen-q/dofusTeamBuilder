/* Dofus Team Builder c: */
import { useContext } from "react"
import CharacterContext from "../context/CharacterContext"

export default function CharacterDisplay() {
    const { characterSelected } = useContext(CharacterContext) || {};

    return (
        <div>
            <h2>{characterSelected?.className}</h2> {/* fix ? if needed*/}
            <h3>DPS Rating: {characterSelected?.dpsRating}</h3>
            <h3>Healing Rating: {characterSelected?.healingRating}</h3>
            {/* Likely need a Shield Point rating */}
            <h3>Effective Range(s): {characterSelected?.effectiveRange}</h3>
            <h3>Mobility Rating: {characterSelected?.mobilityRating}</h3>
            <ul>
                {characterSelected?.qualities.map((item) => (
                    <li>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}