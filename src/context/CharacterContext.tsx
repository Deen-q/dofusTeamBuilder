/* Dofus Team Builder c: */
import { createContext, ReactNode, useState } from "react";
import { CharacterBase } from "../data/dofusClasses";

interface CharacterContextType {
    selectedCharacter: CharacterBase | null;
    setSelectedCharacter: (dofusClass: CharacterBase) => void; // no value expected
}

const CharacterContext = createContext<CharacterContextType | null>(null);
// null before Provider has set up -> graceful fail (fallback)

export const CharacterProvider = ({ children }: { children: ReactNode }) => {
    const [selectedCharacter, setSelectedCharacter] = useState<CharacterBase | null>(null);

    return (
        <CharacterContext.Provider value={{ selectedCharacter, setSelectedCharacter }}>
            {children}
        </CharacterContext.Provider>
    )
}

export default CharacterContext;