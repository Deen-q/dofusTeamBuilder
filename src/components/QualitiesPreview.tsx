/* Dofus Team Builder c: */
import { useContext } from "react";
import SiteContext from "../context/SiteContext";

export default function QualitiesPreview() {
    const context = useContext(SiteContext);

    if (!context) {
        return <div> Error: SiteContext (QualitiesPreview) is not available.</div>
    }

    const {
        teamQualities = [],
        // setTeamQualities = () => { }
        selectedCharacter
    } = context;

    const noDupesList = new Set<string>(teamQualities);
    // console.log({ noDupesList });

    return (
        <>
            <h2 className='text-2xl'>Combined Team Qualities</h2>
            <ul>
                {selectedCharacter && Array.from(noDupesList).map((quality, index) =>
                    // [noDupesList].map did not work - I guess Array.from converts to an arr 'earlier'?
                    <li key={index}>{quality}</li>
                )}
            </ul>
        </>
    )
}