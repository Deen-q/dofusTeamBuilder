import { createContext, ReactNode, useState } from "react";
import dofusClasses, { CharacterBase } from "../data/dofusClasses";

interface CharacterContextType {
    characterSelected: CharacterBase | null;
    setCharacterSelected: (dofusClass: CharacterBase) => void; // no value expected
}

const CharacterContext = createContext<CharacterContextType | null>(null);
// null before Provider has set up -> graceful fail (fallback)

export const CharacterProvider = ({ children }: { children: ReactNode }) => {
    const [characterSelected, setCharacterSelected] = useState<CharacterBase | null>(null);

    return (
        <CharacterContext.Provider value={{ characterSelected, setCharacterSelected }}>
            {children}
        </CharacterContext.Provider>
    )
}

export default CharacterContext;