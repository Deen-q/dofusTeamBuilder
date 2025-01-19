/* Dofus Team Builder c: */
import { useContext } from "react";
import SiteContext from "../context/SiteContext";

export default function TeamPreview() {
    const context = useContext(SiteContext);

    if (!context) {
        return <div> Error: SiteContext (TeamPreview) is not available.</div>
    }

    const {
        teamDisplay = [],
        setTeamDisplay = () => {}
    } = context;

    const deleteByIndex = (indexToRemove: number) => {
        setTeamDisplay((prev) => prev.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className="bg-slate-400">
            {teamDisplay.map((item, index) => (
                <div 
                    key={index} 
                    className="flex items-center justify-between mb-2">
                        <p className="text-2xl">{item}</p>
                        <button className="btn-delete h-10" onClick={() => deleteByIndex(index)}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    )
}