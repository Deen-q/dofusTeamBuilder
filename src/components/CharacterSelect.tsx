/* Dofus Team Builder c: */
import { useState } from "react";
import dofusClasses from "../data/dofusClasses";

export default function CharacterSelect() {
    const [characterSelected, setCharacterSelected] = useState(Number()); // 3) characterSelected is item.mobilityRating

    const hoverButton = (x: number) => { // poor var name on purpose, to make a point!
        console.log(x);
    }

    const handleClick = (y: number) => { // 2) y = item.mobilityRating
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
                        onClick={() => handleClick(item.mobilityRating)} // 1) passes item.mobilityRating to handleClick
                    >
                        {item.className}
                    </button>
                ))}
            </div>
            <div>Character's Mobility Score: {characterSelected}</div> {/* 4) Bingo -> item.mobilityRating */}
        </div>
    )
}