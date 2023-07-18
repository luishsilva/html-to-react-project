import { Header } from './components/header/Header';
import CharactersTable from './components/characters-table/CharactersTable';
import { Cards } from './components/cards/Cards';
import { data } from './fma-data';

function App() {
  return (
    <>
      <Header />
      <CharactersTable items={data}/>
      <Cards items={data}/>
    </>
  );
}

export default App;
