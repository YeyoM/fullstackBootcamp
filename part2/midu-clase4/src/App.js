import './App.css';
import { useState, useEffect } from 'react';
import { Note } from './Note';
import getAllNotes from './services/notes/getAllNotes'
import createNote from './services/notes/createNote'
import axios from 'axios'

function App() {

  const [notes, setNotes] =  useState([]);
  const [newNote, setNewNote] =  useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    getAllNotes().then((notes) => {
      setNotes(notes);
      setLoading(false);
    })
    .catch(err => console.error(err));
  }, [newNote])

  const handleChange = (event) => {
    setNewNote(event.target.value);
  }

  const handleSubmit = (event) => {

    event.preventDefault();

    const noteToAddToState = {
      title: newNote,
      body: newNote,
      userId: 1
    }

    setError('')

    createNote(noteToAddToState)
      .then(newNote => {
        setNotes(prevNotes => prevNotes.concat(newNote))
      })
      .catch(err => {
        console.error(err)
        setError('La API ha petado')
      });

    setNewNote("");
  }

  return (
    <div>
      <h2>Notes</h2>
      {
        loading ? 'Cargando...' : ''
      }
      <ul>
        {notes.map((note) => (
          <Note key={note.id} {...note}/>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote}/>
        <button>Create Note</button>
      </form>
    </div>
  )
}

export default App;
