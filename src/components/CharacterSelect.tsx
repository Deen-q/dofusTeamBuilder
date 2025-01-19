/* Dofus Team Builder c: */
import { useContext } from "react";
import dofusClasses, { CharacterBase } from "../data/dofusClasses";
import SiteContext from "../context/SiteContext";
import TeamPreview from "./TeamPreview";

export default function CharacterSelect() {
    const context = useContext(SiteContext);

    if (!context) {
        return <div> Error: SiteContext (CharacterSelect) is not available.</div>
    };

    const {
        selectedCharacter,
        setSelectedCharacter = () => { },
        teamDisplay = [],
        setTeamDisplay = () => { },
        setTeamQualities = () => { },
        // teamQualities // used for log
    } = context;

    const handleSelection = (character: CharacterBase) => {
        setSelectedCharacter?.(character)
    };

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
        <div >
            <h2 className="text-2xl">Character Select</h2>
            <div className="h-24 flex grid-cols-* gap-2">
                {dofusClasses.map((item, index) => (
                    <button
                        className="btn h-12"
                        key={index}
                        // onMouseEnter={() => hoverButton(item.dpsRating)} // implement hover later
                        onClick={() => handleSelection(item)}
                    >
                        {item.className} {/*Iop, Cra etc.*/}
                    </button>
                ))}
                <div >
                    <TeamPreview />
                </div>
            </div>

            <div>
                <button className="btn" onClick={() => addToTeamDisplay()}
                >
                    Add to Team Display
                </button>
                <button className="btn" onClick={() => resetTeamPreview()}
                >
                    Reset
                </button>
            </div>
        </div>
    )
}
