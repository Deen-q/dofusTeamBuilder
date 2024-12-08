/* Dofus Team Builder c: */
import { useContext, useState } from "react";
import dofusClasses, { CharacterBase } from "../data/dofusClasses";
import CharacterContext from "../context/CharacterContext";

export default function CharacterSelect() {
    const { selectedCharacter, setSelectedCharacter } = useContext(CharacterContext) || {};
    const [teamDisplay, setTeamDisplay] = useState<string[]>([]);

    // const hoverButton = (x: number) => { // to be -> `character: CharacterBase`
    //     console.log(x);
    // }

    const handleClick = (character: CharacterBase) => { // to be -> `character: CharacterBase`
        setSelectedCharacter?.(character)
    }

    const addToTeamDisplay = () => {
        if (selectedCharacter?.className) {
            setTeamDisplay((prev) => [...prev, selectedCharacter.className])
        }
    }

    // const removeFromTeamDisplay = (itemToRemove: string) => {
    //     setTeamDisplay((prev) => prev.filter((x) => x !== itemToRemove));
    // };

    return (
        <div>
            This is CharacterSelect!
            <div>
                {dofusClasses.map((item, index) => (
                    <button
                        key={index}
                        // onMouseEnter={() => hoverButton(item.dpsRating)} // x
                        onClick={() => handleClick(item)}
                    >
                        {item.className}
                    </button>
                ))}
            </div>
            <button
                onClick={() => addToTeamDisplay()}
            >
                Add to Team Display
            </button>
            <div>{teamDisplay.map((item, index) => (
                <div>
                    <p key={index}>{item}</p>
                    <button
                        onClick={() =>
                            // setTeamDisplay(teamDisplay.slice(index))
                            setTeamDisplay(teamDisplay.filter((x) => x !== item)) // removal via index is ideal
                        }
                    >Delete
                    </button> {/*logic for delete button*/}
                </div>
            ))}
            </div>
        </div>
    )
}
