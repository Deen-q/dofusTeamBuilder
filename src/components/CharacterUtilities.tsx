/* Dofus Team Builder c: */

export default function CharacterUtilities({ selected }: any) {

    return (
        <>
            {/* the REAL 'Qualities Preview' - they show on class click! */}
            <h4 className='text-2xl'>Class Utilities:</h4>
            <div>
                <ul className="scroll">
                    {selected?.qualities.map((item: any, index: any) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

        </>
    );
}