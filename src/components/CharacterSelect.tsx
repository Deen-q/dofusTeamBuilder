/* Dofus Team Builder c: */
import { useState } from "react";
import dofusClasses from "../data/dofusClasses";

export default function CharacterSelect() {
    const [characterSelected, setCharacterSelected] = useState();

    const hoverButton = (x: number) => { // poor var name on purpose, to make a point!
        console.log(x);
    }

    const handleClick = (y: any) => {
        setCharacterSelected(y)
    }

    return (
        <div>
            This is CharacterSelect!
            <div>
                {dofusClasses.map((item, index) => (
                    <button
                        key={index}
                        onMouseEnter={() => hoverButton(item.dpsRating)}
                        onClick={() => handleClick(item.mobilityRating)}
                    >
                        {item.className}
                    </button>
                ))}
            </div>
            <div>Character's Mobility Score: {characterSelected}</div>
        </div>
    )
}