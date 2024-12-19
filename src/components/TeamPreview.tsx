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
        <div>
            {teamDisplay.map((item, index) => (
                <div>
                    <p key={index}>{item}</p> {/*appended class*/}
                    <button onClick={() => deleteByIndex(index)}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    )
}