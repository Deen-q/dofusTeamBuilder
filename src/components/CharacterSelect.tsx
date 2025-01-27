/* Dofus Team Builder c: */
import { useContext } from "react";
import dofusClasses, { CharacterBase } from "../data/dofusClasses";
import SiteContext from "../context/SiteContext";
import StatDisplay from "./StatDisplay";
// import TeamPreview from "./TeamPreview";
import { useTeamActions } from "../custom_hooks/useTeamActions";

export default function CharacterSelect() {
    const { addToTeamPreview } = useTeamActions();
    const context = useContext(SiteContext);
    if (!context) {
        return <div> Error: SiteContext (CharacterSelect) is not available.</div>
    };

    const {
        setSelectedCharacter = () => { },
    } = context;

    const handleSelection = (character: CharacterBase) => {
        setSelectedCharacter?.(character)
    };

    return (
        <div>
            <h2 className="text-2xl">Character Select</h2>
            <div className="flex justify-between"> {/*flex for preview + buttons to be side by side*/}
                {/* Character Select buttons */}
                <div className="w-1/2 space-y-8">
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
                <div className="w-1/2"> {/*widths calculated independently despite being nested within a parent with w-1/2*/}
                    {/* <TeamPreview /> */}
                    <StatDisplay />
                </div>
            </div>
        </div>
    )
}
