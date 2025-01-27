/* Dofus Team Builder c: */
import { useContext } from "react";
import SiteContext from "../context/SiteContext";

export const useTeamActions = () => {
    const context = useContext(SiteContext);
    if (!context) {
        // alert/console logs breaks the code, throw new Error does not! This is because this stops execution.
        throw new Error("useTeamActions must be used within a SiteProvider");
    }

    const addToTeamPreview = (): void => {
        const { selectedCharacter, teamDisplay, setTeamDisplay, setTeamQualities } = context;

        if (!selectedCharacter?.className) {
            alert("Please select a character.");
        } else if (teamDisplay.length < 4) {
            setTeamDisplay((prev) => [...prev, selectedCharacter.className]);
            setTeamQualities((prev) => [
                ...(prev ?? []),
                ...selectedCharacter.qualities,
            ]);
        } else {
            alert("Max of 4. Duplicate classes are acceptable.");
        }
    };

    const resetTeamPreview = (): void => {
        const { setSelectedCharacter, setTeamDisplay, setTeamQualities } = context;

        setSelectedCharacter(null);
        setTeamDisplay([]);
        setTeamQualities([]);
    };

    return { addToTeamPreview, resetTeamPreview };
};
