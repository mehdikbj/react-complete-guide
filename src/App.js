import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {
  state = {
    persons: [
        { id: 'eae3', name: 'Mehdi', age: 26},
        { id: 'erz2', name: 'Hamza', age: 22}
    ],
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
        ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

      this.setState({ persons: persons })
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });

  };

  togglePersonHandler = () => {
    this.setState({
        showPersons: !this.state.showPersons
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

    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <div>
              {this.state.persons.map( (person, index) => {
                return (
                    <Person
                        click={() => this.deletePersonHandler(index)}
                        name={person.name}
                        age={person.age}
                        key={person.id}
                        changed={(event) => this.nameChangedHandler(event, person.id)}
                    />
                );
              })}
          </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, i'm a react app</h1>
        <button
            style={style}
            onClick={this.togglePersonHandler}>Switch Name
        </button>
          { persons }
      </div>
    );
  }
}

export default App;
