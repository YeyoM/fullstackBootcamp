import './App.css';
import React, { useState } from 'react'
import Filter from './components/Filter'
import NewContactForm from './components/NewContactForm'
import Numbers from './components/Numbers'

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
      <Filter 
        handleFilterInput={handleFilterInput}
        newFilter={newFilter}
      />
      <NewContactForm 
        handleSubmit={handleSubmit} 
        handleFilterInput={handleFilterInput} 
        handleInput={handleInput} 
        handleNumberInput={handleNumberInput}
        newName={newName}
        newNumber={newNumber}  
      />
      <Numbers 
        persons={persons}
        newFilter={newFilter}
      />
    </div>
  )
}

export default App
