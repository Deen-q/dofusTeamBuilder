/* Dofus Team Builder c: */
import { useContext } from "react";
import SiteContext from "../context/SiteContext";

export default function AddAndReset() {
    const context = useContext(SiteContext);
    if (!context) {
        return <div> Error: SiteContext (AndAndReset) is not available.</div>
    };

    const {
        selectedCharacter,
        setSelectedCharacter = () => { },
        teamDisplay = [],
        setTeamDisplay = () => { },
        setTeamQualities = () => { },
    } = context;

    const addToTeamDisplay = () => {
        if (!selectedCharacter?.className) {
            alert("Please select a character.");
        } else if (teamDisplay.length < 4) {
            setTeamDisplay((prev) => [...prev, selectedCharacter.className]);
            // setTeamQualities((prev) => [...prev, ...selectedCharacter.qualities]);

            setTeamQualities((prev) => [ // returns new arr with updated state; 
                ...(prev ?? []), // [] if null or undefined
                ...selectedCharacter.qualities,  // spread into the arr
            ])
        } else {
            alert("Max of 4. Duplicate classes are acceptable.")
        }
    };

    const resetTeamPreview = () => {
        setSelectedCharacter(null);
        setTeamDisplay([]);
        setTeamQualities([]);
    }

    return (
        <div className="w-1/2 space-y-8"> {/* make add button stop jumping when adding the 4th character */}
            <button className="btn-add m-1" onClick={() => addToTeamDisplay()}
            >
                Add to Team Display
            </button>
            <button className="btn-reset m-1" onClick={() => resetTeamPreview()}
            >
                Reset
            </button>
        </div>
    )
}
