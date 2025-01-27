# Notes

## Context
1) createContext - defined once and provides both Provider and Consumer needed to share state
2) createContext comes from React's Context API (-> context *object* for state)
3) createContext creates context to hold state value for characterSelected and setCharacterSelected
4) will return undefined until provided by CharacterContext.Provider. Prevents access before it's available.

## Provider
i.e., CharacterContext.tsx --> CharacterProvider
1) CharacterContext is created (createContext), followed by exporting the Provider (CharacterProvider) which will be used to wrap other components within App.tsx.


## Design Notes
1) Need to go back. Stat display, for selected char, should be on the right
2) Combined stats and TeamPreview should be below?