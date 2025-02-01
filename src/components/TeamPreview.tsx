/* Dofus Team Builder c: */
import { useContext } from "react";
import SiteContext from "../context/SiteContext";
import CombinedQualitiesPreview from "./CombinedQualitiesPreview";

export default function TeamPreview() {
    const context = useContext(SiteContext);

    if (!context) {
        return <div> Error: SiteContext (TeamPreview) is not available.</div>
    }

    const {
        teamDisplay,
        setTeamDisplay
    } = context;

    const deleteByIndex = (indexToRemove: number) => {
        setTeamDisplay((prev) => prev.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div>
            <h2 className="text-2xl w-1/2">Team Preview</h2>
            <div className="flex w-full">
                <div className="w-1/2 self-start p-4">
                    {teamDisplay.map((chosenCharacter, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between p-1">
                            <p className="text-2xl">
                                {chosenCharacter}
                            </p>
                            <button className="btn-delete h-10" onClick={() => deleteByIndex(index)}>
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
                <div className="w-1/2">
                    <CombinedQualitiesPreview />
                </div>
            </div>
        </div>
    )
}

// "Team Preview" L24, does not sit on the same line as "Combined Team Qualities", on L23 (in its respective file)