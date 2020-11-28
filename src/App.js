import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component'



class  App extends Component {
constructor(){
  super();
// this is what being changes by user's interaction
  this.state = {
    monsters: [ ],
    searchField: ''
  }

  // not much usable 
  // this.handleChange = this.handleChange.bind(this);
}
 

// it calls whatever block of code we write inside
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters: users }));
}

handleChange = e => {
  this.setState({searchField: e.target.value })
}
// state is turning to prop here 
  render(){
    const {monsters, searchField } = this.state;
    const filterMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))
    // filtering,  same as
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchFie1ld;
  return (
     
    <div className="App">
 <h1> Monsters Rolodex </h1>

    {/* <input type='password'/>  
    // () =>  console.log(this.state)  callback
        // to make it asynch*/}
    {/* <input
     type='search'
      placeholder='search monsters'
     onChange={ e => this.setState({searchField: e.target.value}, 
      )}/>  */}
<SearchBox
placeholder='search monsters'
handleChange = {this.handleChange}
/>

      <CardList monsters={filterMonsters}>;
  </CardList>
    </div>
  );
}
};

export default App;
