/* Dofus Team Builder c: */
import CharacterDisplay from './components/StatDisplay';
import CharacterSelect from './components/CharacterSelect';
import { CharacterProvider } from './context/CharacterContext';

export default function App() {
  return (
    <CharacterProvider> {/* From CharacterContext */}
      <CharacterSelect />
      <CharacterDisplay />
    </CharacterProvider>
  );
}
