/* Dofus Team Builder c: */
// import { useContext } from "react"
// import SiteContext from "../context/SiteContext"

import CharacterUtilities from "./CharacterUtilities";

export default function StatDisplay({ selected }: any) {
    // const context = useContext(SiteContext);

    // if (!context) {
    //     return <div> Error: SiteContext (StatDisplay) is not available.</div>
    // }

    // const {
    //     selectedCharacter,
    // } = context;

    // cant remove the return: "void isnt a valid jsx element" - gotta find where this is defined
    return (
        <div className="flex justify-between w-full gap-8"> {/* parent flex container */}
            <div className="w-1/2">
                <h2 className='text-2xl'>Stat Display</h2>
                {selected ?
                    <h3>{selected?.className}</h3> : <h3>Please select a class.</h3>
                }
                <h4 className='text-2xl'>DPS Rating: {selected?.dpsRating}</h4>
                <h4 className='text-2xl'>Healing Rating: {selected?.healingRating}</h4>
                {/* Likely need a Shield Point rating */}
                <h4 className='text-2xl'>Effective Range(s): </h4>
                <p>{selected?.effectiveRange.join(", ")}</p>
                <h4 className='text-2xl'>Mobility Rating: {selected?.mobilityRating}</h4>
            </div>

            <div className="w-1/2">
                {/* the REAL 'Qualities Preview' - they show on class click! */}
                <CharacterUtilities selected={selected} />
            </div>
        </div>
    );
}
