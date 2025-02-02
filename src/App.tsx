/* Dofus Team Builder c: */
import CharacterSelect from './components/CharacterSelect';
import { SiteProvider } from './context/SiteContext';
import TeamPreview from './components/TeamPreview';
import AddAndReset from './components/AddAndReset';
import './index.css';

export default function App() {
  return (
    <div className='basicFormatting'>
      <h1 className='text-3xl'>DofusTeamBuilder</h1>
      <SiteProvider>
        <CharacterSelect /> {/*Houses StatDisplay*/}
        {/* <AddAndReset /> */}
        <TeamPreview />
        {/* <CharacterDisplay /> */}
        {/* <QualitiesPreview /> */}
      </SiteProvider>
    </div>
  );
}

// NEXT: Add the rest of the classes
// OPTIMISE: useCallback and useMemo where necessary
