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
        <div className="flex flex-row bg-slate-400">
            {teamDisplay.map((item, index) => (
                <div>
                    <p className='text-2xl' key={index}>{item}</p> {/*appended class*/}
                    <button className='btn' onClick={() => deleteByIndex(index)}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    )
}