/* Dofus Team Builder c: */
import { useContext } from "react";
import SiteContext from "../context/SiteContext";

export default function CombinedQualitiesPreview() {
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
        <div>
            {/* Want a count for every quality to display next to Combined Utilities */}
            <h2 className='text-2xl'>Combined Utilities</h2>
            {teamDisplay.length > 0 ? (
                <ul className="scroll">
                    {Array.from(noDupesList).map((quality, index) => (
                        // [noDupesList].map did not work - I guess Array.from converts to an arr 'earlier'?
                        <li key={index}>{quality}</li>
                    ))}
                </ul>
            ) : <p className="text-slate-400">Work in progress...</p>}
        </div>
    )
}
