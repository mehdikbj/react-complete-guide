import React, { Component } from 'react';
import Classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


class App extends Component {
  state = {
    persons: [
        { id: 'eae3', name: 'Mehdi', age: 26},
        { id: 'erz2', name: 'Hamza', age: 22},
        { id: 'ert4', name: 'Anas', age: 27}
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

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
          <div>
              {this.state.persons.map( (person, index) => {
                return (
                    <ErrorBoundary key={person.id}>
                        <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            changed={(event) => this.nameChangedHandler(event, person.id)}
                        />
                    </ErrorBoundary>
                );
              })}
          </div>
      );

      btnClass = Classes.red;
    };

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
        assignedClasses.push(Classes.red);
    }

      if (this.state.persons.length <= 1) {
        assignedClasses.push(Classes.bold);
      }

    return (
      <div className={Classes.App}>
        <h1>Hi, i'm a react app</h1>
        <p className={assignedClasses.join(' ')}>This is really working !!!</p>
        <button
            className={btnClass}
            onClick={this.togglePersonHandler}>Switch Name
        </button>
          { persons }
      </div>
    );
  }
}

export default App;
