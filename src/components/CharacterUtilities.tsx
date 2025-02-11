/* Dofus Team Builder c: */

export default function CharacterUtilities({ selected }: any) {

    return (
        <>
            <h4 className='text-2xl'>Character Utilities:</h4>
            {selected ? (
                <div>
                    <ul className="scroll">
                        {selected?.qualities.map((item: any, index: any) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            ) : <p className="text-slate-400">Awaiting Selection.</p>}
        </>
    );
}
