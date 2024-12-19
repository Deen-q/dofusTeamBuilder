/* Dofus Team Builder c: */
import { createContext, ReactNode, useState } from "react";
import { CharacterBase } from "../data/dofusClasses";

interface SiteContextType {
    selectedCharacter: CharacterBase | null;
    setSelectedCharacter: (dofusClass: CharacterBase) => void; // no value expected
    teamDisplay: string[];
    setTeamDisplay: React.Dispatch<React.SetStateAction<string[]>>;
}

const SiteContext = createContext<SiteContextType | null>(null);
// null before Provider has set up -> graceful fail (fallback)

export const SiteProvider = ({ children }: { children: ReactNode }) => {
    const [selectedCharacter, setSelectedCharacter] = useState<CharacterBase | null>(null);
    const [teamDisplay, setTeamDisplay] = useState<string[]>([]);

    return (
        <SiteContext.Provider value={{
            selectedCharacter,
            setSelectedCharacter,
            teamDisplay,
            setTeamDisplay
        }}>
            {children}
        </SiteContext.Provider>
    )
}

// export default CharacterContext;
export default SiteContext;