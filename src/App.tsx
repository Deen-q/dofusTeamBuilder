/* Dofus Team Builder c: */
import CharacterSelect from './components/CharacterSelect';
import { SiteProvider } from './context/SiteContext';
import './index.css';

export default function App() {
  return (
    <div>
      <h1 className='text-3xl'>DofusTeamBuilder</h1>
      <SiteProvider>
        <CharacterSelect />
      </SiteProvider>
    </div>
  );
}

// NEXT: Add the rest of the classes
// OPTIMISE: useCallback and useMemo where necessary
