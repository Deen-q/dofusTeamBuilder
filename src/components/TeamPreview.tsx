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
        setTeamDisplay = () => { }
    } = context;

    const deleteByIndex = (indexToRemove: number) => {
        setTeamDisplay((prev) => prev.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className="grid grid-cols-2 gap-4 bg-slate-400">
            {teamDisplay.map((item, index) => (
                <div className="grid-cols-2">
                    <p className="text-2xl" key={index}>{item}</p> {/*appended class*/}
                    <button className="btn h-10" onClick={() => deleteByIndex(index)}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    )
}