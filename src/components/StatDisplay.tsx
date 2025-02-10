/* Dofus Team Builder c: */
import { CharacterBase } from "../data/dofusClasses";

interface StatDisplayProps {
    selected: CharacterBase | null;
}

export default function StatDisplay({
    selected
}: StatDisplayProps) {

    // cant remove the return: "void isnt a valid jsx element" - gotta find where this is defined
    return (
        <div >
            <h2 className='text-2xl'>Stat Display</h2>
            <h3>{selected ? selected.className : "Please select a class"}</h3>

            {/* I want the ratings title, e.g., "DPS Rating" to always be present */}
            <h4 className='text-2xl'>DPS Rating: {selected?.dpsRating ?? "-"}</h4>
            <h4 className='text-2xl'>Healing Rating: {selected?.healingRating ?? "-"}</h4>
            {/* Likely need a Shield Point rating */}
            <h4 className='text-2xl'>Effective Range(s): </h4>
            <p>{selected?.effectiveRange.join(", ") ?? "-"}</p>
            <h4 className='text-2xl'>Mobility Rating: {selected?.mobilityRating ?? "-"}</h4>
        </div>
    );
}
