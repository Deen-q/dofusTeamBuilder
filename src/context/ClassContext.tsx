import dofusClasses, { CharacterBase } from "../data/dofusClasses";

interface CharacterSelectContext {
    characterSelected: CharacterBase | null; // from dofusClasses.ts
    setCharacterSelected: (dofusClass: CharacterBase) => void;
    // void because doesnt expect a return value
}

