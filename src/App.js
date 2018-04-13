import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {
  state = {
    persons: [
        { name: 'Mehdi', age: 26},
        { name: 'Hamza', age: 22}
    ]
  };

  switchNameHandler = (newName) => {
      this.setState({
          persons: [
              { name: newName, age: 26},
              { name: 'MY Hamza', age: 22}
          ]
      })
  };

  nameChangedHandler = (event) => {
      this.setState({
          persons: [
              { name: 'Mehdi', age: 26},
              { name: event.target.value, age: 22}
          ]
      })
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, i'm a react app</h1>
        <button
            style={style}
            onClick={this.switchNameHandler.bind(this, 'MEHDI KKKK')}>Switch Name</button>
        <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, 'MEHDI !!!')}
        > and i'm feeling gooooood !!!! </Person>
        <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changed={this.nameChangedHandler}
        />
      </div>
    );
  }
}

export default App;
