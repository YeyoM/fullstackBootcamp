import './App.css';
import Statistics from './Statistics';
import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(prevGood => {
      return prevGood + 1
    })
  }
  const handleNeutral = () => {
    setNeutral(prevNeutral => {
      return prevNeutral + 1
    })
  }
  const handleBad = () => {
    setBad(prevBad => {
      return prevBad + 1
    })
  }

  let isEmpty = false;

  if (good === 0 & neutral === 0 & bad === 0) {
    isEmpty = true;
  }

  return (
    <div>
      <h2>Give Feedback</h2>
      <button onClick={handleGood}>GOOD</button>
      <button onClick={handleNeutral}>NEUTRAL</button>
      <button onClick={handleBad}>BAD</button>
      <div>
        {isEmpty 
          ? "No feedback given" 
          : <Statistics good={good} bad={bad} neutral={neutral}/>
        }
      </div>
    </div>
  )
}

export default App
