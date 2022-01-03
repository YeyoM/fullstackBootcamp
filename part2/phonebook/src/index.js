import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const persons = [
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]

ReactDOM.render(
  <App persons={persons}/>,
  document.getElementById('root')
);
