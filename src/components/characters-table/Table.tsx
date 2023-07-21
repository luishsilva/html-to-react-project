import { Component } from 'react';
import './characters-table.css';

type TableProps = {
  name: string;
  skillset: string,
  votes: string,
  characters: any | object;
};

class Table extends Component<TableProps> {
  constructor(characters){
    super(characters);
  }
  render() {
    const { characters } = this.props;
    const fiveElements = characters.slice(0 ,5);
    const sorted = fiveElements.sort((a, b) => b.votes - a.votes);
    return (
      <section id='character-ratings'>
        <div className='wrap-table'>
          <h4> Top Characters </h4>
          <table className="characters-table">
          <thead>
              <tr>
                <th>Name</th>
                <th>Skillset</th>
                <th>Votes</th>
              </tr>
            </thead>
            <tbody>
              {
                sorted.map((character, index) => (
                  <tr key={character.name} className={ index%2 === 0 ? 'table-row-color-gray' : ''}>
                    <td>{character.name}</td>
                    <td>{character.skillset}</td>
                    <td>{character.votes}</td>
                  </tr>      
                ))
              }
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default Table;