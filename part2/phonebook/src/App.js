import './App.css';
import React, { useState, useEffect } from 'react'
import getContacts from './services/getConstacts'
import addContact from './services/addContact'
import Filter from './components/Filter'
import NewContactForm from './components/NewContactForm'
import Numbers from './components/Numbers'
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newNumber, setNewNumber] = useState(''); 
  const [newName, setNewName] = useState('');
  const [newFilter, setNewFilter] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    getContacts().then(contacts => {
      setPersons(contacts);
      setIsLoading(false);
    })
    .catch(err => {
      console.error(err);
      setError(true);
    })
  }, []);

  console.log(persons)

  const handleInput = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberInput = (event) => {
    setNewNumber(event.target.value);
  }

  const handleFilterInput = (event) => {
    setNewFilter(event.target.value);
  }

  const handleDeleteClick = ({id,e}) => {
    console.log(id, e)
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
      if(newName.toLowerCase() === persons[i].name.toLowerCase()) {
        alreadyExists = true;
      }
    }

    if(alreadyExists) {
      window.alert(`${newName} already exists`);
    } else {
      addContact(newPerson)
        .then(newPerson => {
          setPersons(prevPersons => prevPersons.concat(newPerson))
        })
        .catch(err => {
          console.log(err)
        });
      setNewName('');
      setNewNumber('');
    }
  }

  const handleDelete = (event) => {
    event.preventDefault()
    console.log('hola')
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
        handleDelete={handleDelete}
        handleDeleteClick={handleDeleteClick}
      />
    </div>
  )
}

export default App
