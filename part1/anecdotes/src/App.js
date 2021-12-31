import './App.css';
import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0]);

  const handleNextAnecdote = () => {
    let newSelected = Math.floor(Math.random() * 7);
    setSelected(newSelected);
  }

  const handleVote = () => {
    const copyVotes = [...votes];
    copyVotes[selected] += 1;
    setVotes(copyVotes);
  }

  let may = 0;
  for (let i = 0; i < votes.length; i++) {
    if (votes[i] > votes[may]) {
      may = i;
    }
  }

  console.log(may);
  console.log(votes)

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleNextAnecdote}>NEXT ANECDOTE</button>
      <button onClick={handleVote}>VOTE</button>
      <p>The most voted anecdote</p>
      <p>{anecdotes[may]}</p>
    </div>
  )
}

export default App;
