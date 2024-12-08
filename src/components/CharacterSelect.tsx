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

    const handleClick = (y: CharacterBase) => { // to be -> `character: CharacterBase`
        setSelectedCharacter?.(y)
    }

    const addToTeamDisplay = () => {
        if (selectedCharacter?.className) {
            setTeamDisplay((prev) => [...prev, selectedCharacter.className])
        }
    }

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
            <div>{teamDisplay.map((className, index) => (
                <div>
                    <p key={index}>{className}</p>
                    <button>X</button> {/*logic for delete button*/}
                </div>
            ))}
            </div>
        </div>
    )
}

/*
- why does L26 not work anymore (something about item being the entire object)
- create useContext practice file, with increasing lvls of difficulty (sep repo?)
*/