/* Dofus Team Builder c: */
import { useContext } from "react"
import CharacterContext from "../context/CharacterContext"

export default function StatDisplay() {
    const { selectedCharacter } = useContext(CharacterContext) || {};

    return (
        <div>
            <h1>Stat Display</h1>
            {selectedCharacter ?
                <h2>{selectedCharacter?.className}</h2> : <h2>Please select a class.</h2>
            }
            <h3>DPS Rating: {selectedCharacter?.dpsRating}</h3>
            <h3>Healing Rating: {selectedCharacter?.healingRating}</h3>
            {/* Likely need a Shield Point rating */}
            <h3>Effective Range(s): {selectedCharacter?.effectiveRange.join(", ")}</h3>
            <h3>Mobility Rating: {selectedCharacter?.mobilityRating}</h3>
            <h3>Qualities/Utility:</h3>
            <ul>
                {selectedCharacter?.qualities.map((item) => (<li>{item}</li>))}
            </ul>
        </div>
    )
}