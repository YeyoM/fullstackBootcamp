import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { useState } from 'react';

const rootElement = document.getElementById("root");

const Counter = ({number}) => {
  return <h1>{number}</h1>;
}

const App = (props) => {

  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1);
  }
  
  const handleClickReset = () => {
    setContador(0);
  }

  const isEven = contador % 2 === 0;

  return (
    <div>
      <Counter number={contador}/>
      <p>{isEven ? 'Es par' : 'Es impar'}</p>
      <button onClick={handleClick}>
        Incrementar
      </button>
      <button onClick={handleClick}>
        Restar
      </button>
      <button onClick={handleClickReset}>
        Reset
      </button>
    </div>
  )
}


ReactDOM.render(
    <App/>,
  rootElement
);

