/* Dofus Team Builder c: */
import { useContext, useState } from "react";
import dofusClasses, { CharacterBase } from "../data/dofusClasses";
import SiteContext from "../context/SiteContext";
import StatDisplay from "./StatDisplay";
import CharacterUtilities from "./CharacterUtilities";
import AddAndReset from "./AddAndReset";
import TeamPreview from "./TeamPreview";
import CombinedQualitiesPreview from "./CombinedQualitiesPreview";

export default function CharacterSelect() {
    const [selectedCharacter, setSelectedCharacter] = useState<CharacterBase | null>(null);
    const context = useContext(SiteContext);
    if (!context) {
        return <div> Error: SiteContext (CharacterSelect) is not available.</div>
    };

    const {
        teamDisplay,
        setTeamDisplay, 
        setTeamQualities
    } = context;

    const handleSelection = (character: CharacterBase) => {
        setSelectedCharacter?.(character)
    };

    const addToTeamPreview = (): void => {
        if (!selectedCharacter?.className) {
            alert("Please select a character.");
        } else if (teamDisplay.length < 4) {
            setTeamDisplay((prev) => [...prev, selectedCharacter.className]);
            setTeamQualities((prev) => [
                ...(prev ?? []),
                ...selectedCharacter.qualities,
            ]);
        } else {
            alert("Max of 4. Duplicate classes are acceptable.");
        }
    };

    const resetTeamPreview = (): void => {
        setSelectedCharacter(null);
        setTeamDisplay([]);
        setTeamQualities([]);
    };

    return (
        <>
        <div>
            <div className="flex justify-between"> {/*flex for preview + buttons to be side by side*/}
                <div className="w-2/3 p-4">
                    <h2 className="text-2xl">Character Select</h2>
                    {dofusClasses.map((characterButton, index) => (
                        <button
                            className="btn h-12 m-1"
                            key={index}
                            // onMouseEnter={() => hoverButton(item.dpsRating)} // implement hover later
                            onClick={() => handleSelection(characterButton)}
                            onDoubleClick={addToTeamPreview}
                        >
                            {characterButton.className} {/*Iop, Cra etc.*/}
                        </button>
                    ))}
                </div>
                <div className="w-1/3">
                <TeamPreview />
                </div>
            </div>
        </div>
        <div>
            <AddAndReset 
            addToTeamPreview={addToTeamPreview}
            resetTeamPreview={resetTeamPreview}
            />
        </div>
        <div className="flex">
        <div className="w-1/3"><StatDisplay selected={selectedCharacter}/></div>
        <div className="w-1/3"><CharacterUtilities selected={selectedCharacter} /></div>
        <div className="w-1/3"><CombinedQualitiesPreview /></div>
        </div>
        </>
    )
}
