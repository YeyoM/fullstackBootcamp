import './App.css';
import React, { useState } from 'react'
import Contact from './components/Contact'

const App = (props) => {
  const [persons, setPersons] = useState(props.persons);
  const [newNumber, setNewNumber] = useState(''); 
  const [newName, setNewName] = useState('');
  const [newFilter, setNewFilter] = useState('');

  const handleInput = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberInput = (event) => {
    setNewNumber(event.target.value);
  }

  const handleFilterInput = (event) => {
    setNewFilter(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    let alreadyExists = false

    for(let i = 0; i < persons.length; i++) {
      if(newName === persons[i].name) {
        alreadyExists = true;
      }
    }

    if(alreadyExists) {
      window.alert(`${newName} already exists`);
    } else {
      setPersons(persons.concat(newPerson));
      setNewName('');
      setNewNumber('');
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          filter shown with: <input type="text" onChange={handleFilterInput} value={newFilter}/>
        </div>
      <h3>Add a new</h3>
      <form onSubmit={handleSubmit}>
        <div>
          number: <input type="text" onChange={handleNumberInput} value={newNumber}/>
        </div>
        <div>
          name: <input type="text" onChange={handleInput} value={newName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons
        .filter((person) => {
          if (person.name.toLowerCase().includes(newFilter.toLowerCase()) === true) {
            return person
          }
        })
        .map((person) => {
          return <Contact key={person.id} {...person}/>
      })}
    </div>
  )
}

export default App
