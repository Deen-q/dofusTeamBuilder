/* Dofus Team Builder c: */
import { useContext } from "react";
import dofusClasses, { CharacterBase } from "../data/dofusClasses";
import SiteContext from "../context/SiteContext";
import StatDisplay from "./StatDisplay";
import { useTeamActions } from "../custom_hooks/useTeamActions";
import CharacterUtilities from "./CharacterUtilities";

export default function CharacterSelect() {
    const { addToTeamPreview } = useTeamActions();
    const context = useContext(SiteContext);
    if (!context) {
        return <div> Error: SiteContext (CharacterSelect) is not available.</div>
    };

    // selectedCharacter remains in context because useTeamActions requires it. 
    // useTeamActions allows doubleClick functionality here, and add/remove to TeamPreview via AddAndReset
    const {
        selectedCharacter,
        setSelectedCharacter,
    } = context;

    const handleSelection = (character: CharacterBase) => {
        setSelectedCharacter?.(character)
    };

    return (
        <div>
            <h2 className="text-2xl w-1/2">Character Select</h2>
            <div className="flex justify-between"> {/*flex for preview + buttons to be side by side*/}
                {/* Character Select buttons */}
                <div className="w-1/2 ">
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
                <div className="w-1/4"> {/*widths calculated independently despite being nested within a parent with w-1/2*/}
                    <StatDisplay selected={selectedCharacter} />
                </div>
                <div className="w-1/4">
                    <CharacterUtilities selected={selectedCharacter} />
                </div>
            </div>
        </div>
    )
}
