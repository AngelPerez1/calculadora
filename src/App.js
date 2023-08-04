import { evaluate } from 'mathjs';
import { useState } from 'react';
import './App.css';
import Boton from './componentes/Boton';
import BotonClear from './componentes/BotonClear';
import Pantalla from './componentes/Pantalla';
import calculadoralogo from './imagenes/calculadora-logo.png';

function App() {

  const [input, setInput] = useState('');

  const tipearInput = val => {
    setInput(input + val)
  };
  
  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else { 
      alert("Por favor ingrese valres para realizar operaciones")
    }
  };

  return (
    <div className="App">
      <div className='calculadora-logo-contenedor' >
        <img
          src={calculadoralogo}
          className='caculadora-logo'
          alt='Logo de calculadora'
        />    
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={tipearInput}>1</Boton>
          <Boton manejarClic={tipearInput}>2</Boton>
          <Boton manejarClic={tipearInput}>3</Boton>
          <Boton manejarClic={tipearInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={tipearInput}>4</Boton>
          <Boton manejarClic={tipearInput}>5</Boton>
          <Boton manejarClic={tipearInput}>6</Boton>
          <Boton manejarClic={tipearInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={tipearInput}>7</Boton>
          <Boton manejarClic={tipearInput}>8</Boton>
          <Boton manejarClic={tipearInput}>9</Boton>
          <Boton manejarClic={tipearInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={tipearInput}>0</Boton>
          <Boton manejarClic={tipearInput}>.</Boton>
          <Boton manejarClic={tipearInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
