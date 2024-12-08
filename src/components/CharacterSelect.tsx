/* Dofus Team Builder c: */
import { useContext, useState } from "react";
import dofusClasses, { CharacterBase } from "../data/dofusClasses";
import CharacterContext from "../context/CharacterContext";

export default function CharacterSelect() {
    const { characterSelected, setCharacterSelected } = useContext(CharacterContext) || {};
    // const [teamDisplay, setTeamDisplay] = useState([]);

    // const hoverButton = (x: number) => { // to be -> `character: CharacterBase`
    //     console.log(x);
    // }

    const handleClick = (y: CharacterBase) => { // to be -> `character: CharacterBase`
        setCharacterSelected?.(y)
    }

    // const teamDisplay: string[] = [];

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
            // onClick={() => teamDisplay.push(characterSelected?.className)}
            >
                Add to Team Display
            </button>
            {/* {teamDisplay} */}
        </div>
    )
}

/*
- why does L26 not work anymore (something about item being the entire object)
- create useContext practice file, with increasing lvls of difficulty (sep repo?)
*/