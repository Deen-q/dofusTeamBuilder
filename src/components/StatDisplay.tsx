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
        <div className="flex justify-between w-1/2">
            <div>
                <h2 className='text-2xl'>Stat Display</h2>
                {selectedCharacter ?
                    <h3>{selectedCharacter?.className}</h3> : <h3>Please select a class.</h3>
                }
                <h4 className='text-2xl'>DPS Rating: {selectedCharacter?.dpsRating}</h4>
                <h4 className='text-2xl'>Healing Rating: {selectedCharacter?.healingRating}</h4>
                {/* Likely need a Shield Point rating */}
                <h4 className='text-2xl'>Effective Range(s): </h4>
                <p>{selectedCharacter?.effectiveRange.join(", ")}</p>
                <h4 className='text-2xl'>Mobility Rating: {selectedCharacter?.mobilityRating}</h4>

                <div>
                    <h4 className='text-2xl'>Qualities/Utility:</h4>
                    <div>
                        <ul className="scroll">
                            {selectedCharacter?.qualities.map((item, index) => (
                                <li key={index}>{item}</li>))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
