/* Dofus Team Builder c: */
import { useContext } from "react"
import SiteContext from "../context/SiteContext"

export default function StatDisplay() {
    const context = useContext(SiteContext);

    if (!context) {
        return <div> Error: SiteContext (StatDisplay) is not available.</div>
    }

    const {
        selectedCharacter,
    } = context;

    return (
        <div>
            <h2>Stat Display</h2>
            {selectedCharacter ?
                <h3>{selectedCharacter?.className}</h3> : <h3>Please select a class.</h3>
            }
            <h4>DPS Rating: {selectedCharacter?.dpsRating}</h4>
            <h4>Healing Rating: {selectedCharacter?.healingRating}</h4>
            {/* Likely need a Shield Point rating */}
            <h4>Effective Range(s): {selectedCharacter?.effectiveRange.join(", ")}</h4>
            <h4>Mobility Rating: {selectedCharacter?.mobilityRating}</h4>
            <h4>Qualities/Utility:</h4>
            <ul>
                {selectedCharacter?.qualities.map((item, index) => (
                    <li key={index}>{item}</li>))
                }
            </ul>
        </div>
    )
}