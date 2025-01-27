/* Dofus Team Builder c: */
import { useTeamActions } from "../custom_hooks/useTeamActions";

export default function AddAndReset() {
    const { addToTeamPreview, resetTeamPreview } = useTeamActions();
    return (
        <div className="w-1/2 space-y-8"> {/* make add button stop jumping when adding the 4th character */}
            <button className="btn-add m-1" onClick={addToTeamPreview}
            >
                Add to Team Display
            </button>
            <button className="btn-reset m-1" onClick={resetTeamPreview}
            >
                Reset
            </button>
        </div>
    )
}
