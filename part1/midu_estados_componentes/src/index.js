import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { useState } from 'react';

const rootElement = document.getElementById("root");

const App = () => {

  const [counters, setCounters] = useState({
    left: 0,
    right: 0,
    clicks: 0,
    mensaje: "Holaaaa"
  })

  const handleClickLeft = () => {
    const newCounters = {
      ...counters,
      left: counters.left + 1,
      clicks: counters.clicks + 1
    }
    setCounters(newCounters);
  }

  const handleClickRight = () => {
    const newCounters = {
      ...counters,
      right: counters.right + 1,
      clicks: counters.clicks + 1
    }
    setCounters(newCounters);
  }


  return (
    <div>
      {counters.left}
      <button onClick={handleClickLeft} >
        left
      </button>
      <button onClick={handleClickRight}>
        right
      </button>
      {counters.right}
      <p>clicks totales = {counters.clicks}</p>
      <p>{counters.mensaje}</p>
    </div>
  )
}


ReactDOM.render(
    <App/>,
  rootElement
);

