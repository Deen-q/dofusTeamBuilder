/* Dofus Team Builder c: */
import { useContext } from "react";
import SiteContext from "../context/SiteContext";

// migh be renamed to TeamRating?
export default function Evaluation() {
    const context = useContext(SiteContext);

    if (!context) {
        return <div> Error: SiteContext (CombinedQualitiesPreview) is not available.</div>
    }

    const {
        teamQualities,
        teamDisplay
    } = context;

    const noDupesList = new Set<string>(teamQualities);
    // console.log({ noDupesList });

    return (
        <div >
            <h2 className='text-2xl'>Team Rating: *insert value*</h2>
            {/* {teamDisplay ? "Select at least 1 character." : ""} */}
            <ul className="scroll">
                {teamDisplay.length > 0 ? Array.from(noDupesList).map((quality, index) =>
                    // [noDupesList].map did not work - I guess Array.from converts to an arr 'earlier'?
                    <li key={index}>{quality}</li>
                ) : "Awaiting selection."}
            </ul>
        </div>
    )
}

// Will recieve props of noDupesList (or something similar), and then compare to a total list of Utilities
// A total list doesnt currently exist
// The comparison between Combined Utilities and the total list of utilities = the Evaluation!

// Eventually I would like Utilities to have be apart of a tier list
// so, recommended utlities that are missing will sit at the top. and be in red text
// --> red text to emphasise that it's "critical" to be missing such utilities
// ofc, users can ignore recommendations. their lives will be a little harder though lol...