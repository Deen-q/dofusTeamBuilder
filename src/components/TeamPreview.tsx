/* Dofus Team Builder c: */
import { useContext } from "react";
import SiteContext from "../context/SiteContext";
import CombinedQualitiesPreview from "./CombinedQualitiesPreview";
import iopImage from "../assets/Iop_M.png";

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
            <div className="flex justify-between">
                <div className="w-1/2 self-start p-4">
                    <h2 className="text-2xl">Team Preview</h2>
                    {teamDisplay.map((chosenCharacter, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between p-1"
                        >
                            <img src={iopImage} alt="" />
                            <p className="text-2xl">
                                {chosenCharacter}
                            </p>
                            <button className="btn-delete p-1" onClick={() => deleteByIndex(index)}>
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
                <div className="w-1/2 p-4">
                    <CombinedQualitiesPreview />
                </div>
            </div>
        </div>
    )
}

// "Team Preview" L24, does not sit on the same line as "Combined Team Qualities", on L23 (in its respective file)