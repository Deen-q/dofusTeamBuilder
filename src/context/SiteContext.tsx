/* Dofus Team Builder c: */
import { createContext, ReactNode, useState } from "react";
import { CharacterBase } from "../data/dofusClasses";

interface CharacterContextType {
    selectedCharacter: CharacterBase | null;
    setSelectedCharacter: (dofusClass: CharacterBase) => void; // no value expected
}

const SiteContext = createContext<CharacterContextType | null>(null);
// null before Provider has set up -> graceful fail (fallback)

export const SiteProvider = ({ children }: { children: ReactNode }) => {
    const [selectedCharacter, setSelectedCharacter] = useState<CharacterBase | null>(null);

    return (
        <SiteContext.Provider value={{ selectedCharacter, setSelectedCharacter }}>
            {children}
        </SiteContext.Provider>
    )
}

// export default SiteContext;
export default SiteContext;