/* Dofus Team Builder c: */
import { useContext } from "react";
import SiteContext from "../context/SiteContext";
import iopImage from "../assets/Iop_M.png";

export default function TeamPreview() {
    const context = useContext(SiteContext);

    if (!context) {
        return <div> Error: SiteContext (TeamPreview) is not available.</div>
    }

    const {
        teamDisplay,
        setTeamDisplay
    } = context;

    const deleteByIndex = (indexToRemove: number) => {
        setTeamDisplay((prev) => prev.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div>
            <div className="">
                <div className="p-4">
                    <h2 className="text-2xl">Team Preview</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {teamDisplay.length > 0 ? teamDisplay.map((chosenCharacter, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-1"
                            >
                                <img src={iopImage} alt="" />
                                <p className="text-2xl">
                                    {chosenCharacter}
                                </p>
                                <button className="btn-delete p-1" onClick={() => deleteByIndex(index)}>
                                    Delete
                                </button>
                            </div>
                        )) : "Awaiting selection."} {/*text is white*/}
                    </div>
                </div>
            </div>
        </div>
    )
}
