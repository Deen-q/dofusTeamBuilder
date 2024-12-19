/* Dofus Team Builder c: */
import CharacterDisplay from './components/StatDisplay';
import CharacterSelect from './components/CharacterSelect';
import { SiteProvider } from './context/SiteContext';
import TeamPreview from './components/TeamPreview';
import QualitiesPreview from './components/QualitiesPreview';

export default function App() {
  return (
    <>
      <h1>DofusTeamBuilder</h1>
      <SiteProvider>
        <CharacterSelect />
        <CharacterDisplay />
        <TeamPreview />
        <QualitiesPreview />
      </SiteProvider>
    </>
  );
}
