/* Dofus Team Builder c: */
import CharacterDisplay from './components/StatDisplay';
import CharacterSelect from './components/CharacterSelect';
import { SiteProvider } from './context/SiteContext';
import TeamPreview from './components/TeamPreview';

export default function App() {
  return (
    <SiteProvider> {/* From CharacterContext */}
      <CharacterSelect />
      <CharacterDisplay />
      <TeamPreview />
    </SiteProvider>
  );
}
