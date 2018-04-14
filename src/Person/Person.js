import React from 'react';
import Classes from './Person.css';

const person = (props) => {
    return (
        <div className={Classes.Person}>
            <p onClick={props.click}>I'm a person : My name is { props.name} and my age is { props.age}</p>
            <p> { props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>

    );

};

export default person;