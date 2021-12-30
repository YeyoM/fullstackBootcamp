import React from 'react';
import Title from './components/Title';
import Content from './components/Content';
import Suma from './components/Suma';

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Title course = {course.name}/>
      <Content parts = {course.parts}/>
      <Suma parts={course.parts}/>
    </div>
  )
}

export default App;