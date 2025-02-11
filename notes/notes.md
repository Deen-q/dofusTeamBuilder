# Notes (aka, thinking out loud)

## Code Design Notes:
1) sorted recent issues

## Research
- interface vs type ('Type Alias')

## interface
1) establishing the expected shape of data
2) different to Classes
3) I may opt to have interfaces in all caps for better reading (casing can really throw me off sometimes)
- interface: solely for enforcing structure
- classes: can create objects, an can define functions.
- i.e., classes create objects with defined behavior
4) both can be used to enforce structure

## Context
1) createContext - defined once and provides both Provider and Consumer needed to share state
2) createContext comes from React's Context API (-> context *object* for state)
3) createContext creates context to hold state value for characterSelected and setCharacterSelected
4) will return undefined until provided by CharacterContext.Provider. Prevents access before it's available.
5) careful not to rely on context too much

## Provider
i.e., CharacterContext.tsx --> CharacterProvider
1) CharacterContext is created (createContext), followed by exporting the Provider (CharacterProvider) which will be used to wrap other components within App.tsx.

## Style Design Notes
- Want a count for every quality to display next to Combined Utilities and Character Utilities h2s
- the idea is that it makes it more obvious that more utilities have been added, as you add to Team Preview