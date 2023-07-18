import { Component } from 'react';
import './characters-table.css';


class CharactersTable extends Component{

	constructor(props){
		super(props);
		this.state = {
			items: this.props.items,
		}
	}

	render(){
    const fiveElements = this.state.items.slice(0 ,5);
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
                sorted.map((item, index) => (
                  <tr key={item.name} className={ index%2 === 0 ? 'table-row-color-gray' : ''}>
                    <td>{item.name}</td>
                    <td>{item.skillset}</td>
                    <td>{item.votes}</td>
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

export default CharactersTable;