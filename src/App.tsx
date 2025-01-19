/* Dofus Team Builder c: */
import CharacterDisplay from './components/StatDisplay';
import CharacterSelect from './components/CharacterSelect';
import { SiteProvider } from './context/SiteContext';
import TeamPreview from './components/TeamPreview';
import QualitiesPreview from './components/QualitiesPreview';
import './index.css';

export default function App() {
  return (
    <div className='basicFormatting'>
      <h1 className='text-3xl'>DofusTeamBuilder</h1>
      <SiteProvider>
        <CharacterSelect />
        <TeamPreview />
        <CharacterDisplay />
        <QualitiesPreview />
      </SiteProvider>
    </div>
  );
}

// NEXT: Add the rest of the classes
// WHENEVER: Update className to dofusClass - className is obvious defined by React/JS/TS, will cause confusion.
// OPTIMISE: useCallback and useMemo where necessary
// CSS and styling: see notes.md
// 