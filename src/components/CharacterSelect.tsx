/* Dofus Team Builder c: */
import { useState } from "react";
import dofusClasses from "../data/dofusClasses";

export default function CharacterSelect() {
    const [characterSelected, setCharacterSelected] = useState(Number());

    const hoverButton = (x: number) => {
        console.log(x);
    }

    const handleClick = (y: number) => {
        setCharacterSelected(y)
    }

    return (
        <div>
            This is CharacterSelect!
            <div>
                {dofusClasses.map((item, index) => (
                    <button
                        key={index}
                        onMouseEnter={() => hoverButton(item.dpsRating)} // x
                        onClick={() => handleClick(item.mobilityRating)} // y
                    >
                        {item.className}
                        {index}
                    </button>
                ))}
            </div>
            <div>Character's Mobility Score: {characterSelected}</div>
        </div>
    )
}

// useContext to save state from button press?
// so that CharacterDisplay can use it