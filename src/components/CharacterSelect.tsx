/* Dofus Team Builder c: */
import { useContext } from "react";
import dofusClasses, { CharacterBase } from "../data/dofusClasses";
import CharacterContext from "../context/CharacterContext";

export default function CharacterSelect() {
    // const [characterSelected, setCharacterSelected] = useState(Number());
    const { setCharacterSelected } = useContext(CharacterContext) || {};

    const hoverButton = (x: number) => { // to be -> `character: CharacterBase`
        console.log(x);
    }

    const handleClick = (y: CharacterBase) => { // to be -> `character: CharacterBase`
        setCharacterSelected?.(y)
    }

    return (
        <div>
            This is CharacterSelect!
            <div>
                {dofusClasses.map((item, index) => (
                    <button
                        key={index}
                        onMouseEnter={() => hoverButton(item.dpsRating)} // x
                        // onClick={() => handleClick(item.mobilityRating)} // y
                        onClick={() => handleClick(item)}
                    >
                        {item.className}
                        {index}
                    </button>
                ))}
            </div>
            {/* <div>Character's Mobility Score: {item.characterSelected}</div> */}
        </div>
    )
}

/*
- why does L26 not work anymore (something about item being the entire object)
- create useContext practice file, with increasing lvls of difficulty (sep repo?)
*/