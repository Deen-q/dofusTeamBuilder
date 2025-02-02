/* Dofus Team Builder c: */

interface AddAndResetPROPS {
    addToTeamPreview: () => void; // fancy way of sorting out props in ts, as done before. This time, with 2
    resetTeamPreview: () => void; // dont confuse this with a js no op. a ts no op declares ouput be void
}
// apparently I can use Type Alias (`type`) instead of interface

export default function AddAndReset({
    addToTeamPreview,
    resetTeamPreview
}: AddAndResetPROPS) {
    // const { addToTeamPreview, resetTeamPreview } = useTeamActions();
    return (
        <div className="w-1/2 space-y-8 p-4"> {/* make add button stop jumping when adding the 4th character */}
            <button className="btn-add m-1" onClick={addToTeamPreview}>Add to Team Display</button>
            <button className="btn-reset m-1" onClick={resetTeamPreview}>Reset</button>
        </div>
    )
}
