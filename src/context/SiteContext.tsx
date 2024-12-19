/* Dofus Team Builder c: */
import { createContext, ReactNode, useState } from "react";
import { CharacterBase } from "../data/dofusClasses";

interface SiteContextType {
    selectedCharacter: CharacterBase | null;
    setSelectedCharacter: (dofusClass: CharacterBase | null) => void; // no value expected
    teamDisplay: string[];
    setTeamDisplay: React.Dispatch<React.SetStateAction<string[]>>;
    teamQualities: string[] | Array<string> | null;
    setTeamQualities: React.Dispatch<React.SetStateAction<string[] | Array<string> | null>>;
}

const SiteContext = createContext<SiteContextType | null>(null);
// null before Provider has set up -> graceful fail (fallback)

export const SiteProvider = ({ children }: { children: ReactNode }) => {
    const [selectedCharacter, setSelectedCharacter] = useState<CharacterBase | null>(null);
    const [teamDisplay, setTeamDisplay] = useState<string[]>([]);
    const [teamQualities, setTeamQualities] = useState<string[] | Array<string> | null>([]);

    return (
        <SiteContext.Provider value={{
            selectedCharacter,
            setSelectedCharacter,
            teamDisplay,
            setTeamDisplay,
            teamQualities,
            setTeamQualities
        }}>
            {children}
        </SiteContext.Provider>
    )
}

export default SiteContext;