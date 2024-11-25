/* Dofus Team Builder c: */
import CharacterSelect from './components/CharacterSelect';
import { CharacterProvider } from './context/CharacterContext';

export default function App() {
  return (
    <CharacterProvider> {/* From CharacterContext */}
      <CharacterSelect />
    </CharacterProvider>
  );
}
