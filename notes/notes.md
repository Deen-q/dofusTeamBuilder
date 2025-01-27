# Notes

## Context
1) createContext - defined once and provides both Provider and Consumer needed to share state
2) createContext comes from React's Context API (-> context *object* for state)
3) createContext creates context to hold state value for characterSelected and setCharacterSelected
4) will return undefined until provided by CharacterContext.Provider. Prevents access before it's available.

## Provider
i.e., CharacterContext.tsx --> CharacterProvider
1) CharacterContext is created (createContext), followed by exporting the Provider (CharacterProvider) which will be used to wrap other components within App.tsx.

## Custom Hooks (useTeamActions)
1) Implemented so that 2 functions, AddToTeamPreview and ResetTeamPreview can be used throughout the app:
- CharacterSelect.tsx (for onDoubleClick)
- and AddAndReset (where the logic used to be)
2) All it is, is a file that has 2 functions that access SiteContext.
3) I tried before by exporting the functions as is (inside of AddAndReset.tsx), but it was giving me issues - i.e., asking me to redefine types, despite already being defined in SiteContext (and SiteContextType).
4) alternative to what I did: create a utility function instead of a custom hook. I didnt opt for this, because from the looks, I would be passing in 'context' to my onClicks, rather than the name of functions. Therefore, it seems cleaner (and more like React) to use a custom hook!

## Design Notes
1) Need to go back. Stat display, for selected char, should be on the right
2) Combined stats and TeamPreview should be below?