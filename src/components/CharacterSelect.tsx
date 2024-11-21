/* Dofus Team Builder c: */
import dofusClasses from "../data/dofusClasses";

export default function CharacterSelect() {
    console.log(">>>", dofusClasses);
    const iop = dofusClasses[0]

    return (
        <div>
            This is CharacterSelect!
            <div>
                {/* Need .map method to prevent verbose code i.e., type out a div per class */}
                Class 1: {iop.className}
            </div>
        </div>
    )
}