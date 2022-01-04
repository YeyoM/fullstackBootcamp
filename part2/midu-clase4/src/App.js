import './App.css';
import { useState, useEffect } from 'react';
import { Note } from './Note';
import axios from 'axios'

function App() {

  const [notes, setNotes] =  useState([]);
  const [newNote, setNewNote] =  useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        const {data} = response;
        setNotes(data)
      })
      .catch(err => console.error(err));
  }, [newNote])

  const handleChange = (event) => {
    setNewNote(event.target.value);
  }

  const handleSubmit = (event) => {

    event.preventDefault();

    const noteToAddToState = {
      id: notes.length + 1,
      title: newNote,
      body: newNote
    }
    console.log(noteToAddToState);
    
    setNotes(notes.concat(noteToAddToState));
    setNewNote("");
  }

  /*if (typeof notes === 'undefined' || notes.length === 0) {
    return "No existen notas que mostrar"
  }*/

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
