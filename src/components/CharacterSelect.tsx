/* Dofus Team Builder c: */
import { useContext } from "react";
import dofusClasses, { CharacterBase } from "../data/dofusClasses";
import SiteContext from "../context/SiteContext";

export default function CharacterSelect() {
    // const {
    //     selectedCharacter, // doesnt want to be defined here for some reason
    //     setSelectedCharacter = () => { },
    //     teamDisplay = [],
    //     setTeamDisplay = () => { }
    // } = useContext(SiteContext) || {};

    const context = useContext(SiteContext); // defined differently, vs above, for error handling

    if (!context) {
        return <div> Error: SiteContex is not available.</div>
    }

    const {
        selectedCharacter,
        setSelectedCharacter = () => { },
        teamDisplay = [],
        setTeamDisplay = () => { }
    } = context;

    // const [teamDisplay, setTeamDisplay] = useState<string[]>([]);

    const handleSelection = (character: CharacterBase) => { // to be -> `character: CharacterBase`
        setSelectedCharacter?.(character)
    }

    const addToTeamDisplay = () => {
        if (selectedCharacter?.className) {
            setTeamDisplay((prev) => [...prev, selectedCharacter.className])
        }
    }

    const deleteByIndex = (indexToRemove: number) => {
        setTeamDisplay((prev) => prev.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div>
            This is CharacterSelect!
            <div>
                {dofusClasses.map((item, index) => (
                    <button
                        key={index}
                        // onMouseEnter={() => hoverButton(item.dpsRating)} // implement hover later
                        onClick={() => handleSelection(item)}
                    >
                        {item.className} {/*Iop, Cra etc.*/}
                    </button>
                ))}
            </div>
            <button onClick={() => addToTeamDisplay()}
            >
                Add to Team Display
            </button>

            <div>{teamDisplay.map((item, index) => (
                <div>
                    <p key={index}>{item}</p> {/*appended class*/}
                    <button onClick={() => deleteByIndex(index)}
                    >
                        Delete
                    </button>
                </div>
            ))}
            </div>
        </div>
    )
}

// NEXT: Make new component to display the collection of qualities/attributes afforded by the current team composition
