/* Dofus Team Builder c: */
import dofusClasses from "../data/dofusClasses";

export default function CharacterSelect() {

    const hoverButton = (x: number) => { // poor var name on purpose, to make a point!
        alert(x)
    }

    return (
        <div>
            This is CharacterSelect!
            <div>
                {/* {dofusClasses.map((item) => item.className)} */}
                {dofusClasses.map((item, index) => (
                    <button
                        key={index}
                        onMouseEnter={() => hoverButton(item.dpsRating)}
                    >
                        {item.className}
                    </button>
                ))}
            </div>
        </div>
    )
}