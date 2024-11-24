/* Dofus Team Builder c: */
import dofusClasses from "../data/dofusClasses";

export default function CharacterSelect() {
    // console.log(">>>", dofusClasses);

    return (
        <div>
            This is CharacterSelect!
            <div>
                {/* {dofusClasses.map((index) => index.className)} */}
                {dofusClasses.map((item, index) => (
                    <div key={index}>{item.className}</div>
                ))}
            </div>
        </div>
    )
}