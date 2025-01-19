/* Dofus Team Builder c: */
import { useContext } from "react";
import dofusClasses, { CharacterBase } from "../data/dofusClasses";
import SiteContext from "../context/SiteContext";

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
            setTeamQualities((prev) => [
                ...(prev ?? []),
                ...selectedCharacter.qualities,
            ])
            // console.log(">>>", teamQualities)
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
        <div className="flex flex-row">
            <h2 className="text-2xl">Character Select</h2>
            <div>
                {dofusClasses.map((item, index) => (
                    <button
                        className="btn"
                        key={index}
                        // onMouseEnter={() => hoverButton(item.dpsRating)} // implement hover later
                        onClick={() => handleSelection(item)}
                    >
                        {item.className} {/*Iop, Cra etc.*/}
                    </button>
                ))}
            </div>
            <button className="btn" onClick={() => addToTeamDisplay()}
            >
                Add to Team Display
            </button>
            <button className="btn" onClick={() => resetTeamPreview()}
            >
                Reset
            </button>
        </div>
    )
}
