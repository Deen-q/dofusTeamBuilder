/* Dofus Team Builder c: */
import { useContext } from "react";
import dofusClasses, { CharacterBase } from "../data/dofusClasses";
import SiteContext from "../context/SiteContext";

export default function CharacterSelect() {
    const context = useContext(SiteContext);

    if (!context) {
        return <div> Error: SiteContext is not available.</div>
    }

    const {
        selectedCharacter,
        setSelectedCharacter = () => { },
        teamDisplay = [],
        setTeamDisplay = () => { }
    } = context;

    const handleSelection = (character: CharacterBase) => {
        setSelectedCharacter?.(character)
    }

    const addToTeamDisplay = () => {
        if (!selectedCharacter?.className) {
            alert("Please select a character.");
        } else if (teamDisplay.length < 4) {
            setTeamDisplay((prev) => [...prev, selectedCharacter.className])
        } else {
            alert("Max of 4. Duplicate classes are acceptable.")
        }
    }

    const deleteByIndex = (indexToRemove: number) => {
        setTeamDisplay((prev) => prev.filter((_, index) => index !== indexToRemove));
    };

    const resetTeamPreview = () => {
        setSelectedCharacter(null);
        setTeamDisplay([]);
    }

    return (
        <div>
            This is CharacterSelect!
            <div>
                {dofusClasses.map((item, index) => (
                    <button
                        key={index}
                        // onMouseEnter={() => hoverButton(item.dpsRating)} // implement hover later
                        onClick={() => handleSelection(item)}
                    >
                        {item.className} {/*Iop, Cra etc.*/}
                    </button>
                ))}
            </div>
            <button onClick={() => addToTeamDisplay()}
            >
                Add to Team Display
            </button>
            <button onClick={() => resetTeamPreview()}
            >
                Reset
            </button>

            <div>
                {teamDisplay.map((item, index) => (
                    <div>
                        <p key={index}>{item}</p> {/*appended class*/}
                        <button onClick={() => deleteByIndex(index)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

// NEXT: Make new component to display the collection of qualities/attributes afforded by the current team composition
