/* Dofus Team Builder c: */
import { CharacterBase } from "../data/dofusClasses";

interface StatDisplayProps {
    selected: CharacterBase | null;
}

export default function StatDisplay({
    selected
}: StatDisplayProps) {

    return (
        <div >
            <h2 className='text-2xl'>Stat Display</h2>
            <h3>
                <span className="text-slate-400">{selected ? selected.className : "Please select a class."}</span>
            </h3>
            <h4 className='text-2xl'>DPS Rating: {/* I want the ratings title, e.g., "DPS Rating" to always be present */}
                <span className="text-slate-400">{selected?.dpsRating ?? "-"}</span>
            </h4>
            <h4 className='text-2xl'>Healing Rating:
                <span className="text-slate-400">{selected?.healingRating ?? "-"}</span>
            </h4>
            {/* Likely need a Shield Point rating */}
            <h4 className='text-2xl'>Effective Range(s): </h4>
            <p className="text-slate-400">{selected?.effectiveRange.join(", ") ?? "-"}</p>
            <h4 className='text-2xl'>
                Mobility Rating: <span className="text-slate-400">{selected?.mobilityRating ?? "-"}</span>
            </h4>
        </div>
    );
}
