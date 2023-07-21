import { Header } from './components/header/Header';
//import CharactersTable from './components/characters-table/CharactersTable';
//import Table from './components/characters-table/Table';
import Table from './components/characters-table/Table';
import  { Cards }  from './components/cards/Cards';
import { data } from './fma-data';

function App() {
  return (
    <>
      <Header />
      <Table characters={data}/>
      <Cards characters={data}/>
    </>
  );
}

export default App;
