import './App.css';
import { useState } from 'react';
import { Note } from './Note';

function App(props) {

  const [notes, setNotes] =  useState(props.notes);
  const [newNote, setNewNote] =  useState('');

  const handleChange = (event) => {
    setNewNote(event.target.value);
  }

  const handleSubmit = (event) => {

    event.preventDefault();

    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random < 0.5
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
