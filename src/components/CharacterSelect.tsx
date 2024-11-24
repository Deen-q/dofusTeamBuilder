/* Dofus Team Builder c: */
import dofusClasses from "../data/dofusClasses";

export default function CharacterSelect() {
    // console.log(">>>", dofusClasses);

    //
    const hoverButton = () => {
        // alert("mouse entered")
        const dps = dofusClasses.map((item) => (item.dpsRating));
        alert(dps)
    }

    return (
        <div>
            This is CharacterSelect!
            <div>
                {/* {dofusClasses.map((index) => index.className)} */}
                {dofusClasses.map((item, index) => (
                    <button
                        key={index}
                        onMouseEnter={hoverButton}
                    >
                        {item.className}
                    </button>
                ))}
            </div>
        </div>
    )
}