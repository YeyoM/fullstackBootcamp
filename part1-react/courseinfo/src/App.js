import React from 'react';
import Title from './components/Title';
import Parts from './components/Parts';
import Suma from './components/Suma';

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const total = exercises1 + exercises2 + exercises3;

  return (
    <div>
      <Title course = {course}/>
      <Parts part={part1} exercises={exercises1}/>
      <Parts part={part2} exercises={exercises2}/>
      <Parts part={part3} exercises={exercises3}/>
      <Suma total={total}/>
    </div>
  )
}

export default App