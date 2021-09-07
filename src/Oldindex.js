import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import { useState } from 'react';
import reportWebVitals from './reportWebVitals';

const Counter = ({ number }) => {

  return <h1>{number}</h1>


}
const App = (props) => {

  const [contador, setContador] = useState(0)
  console.log("render")

  const handleClick = () => {

    setContador(contador + 1)
  }
  const handleClickReset = () => {

    setContador(0)
  }
  const isEven = contador % 2 === 0
  const evalnumber = isEven ? 'Es par' : 'Es impar'
  const color = isEven ? 'green' : 'red'
  const stylebutton = {
    backgroundColor: color,
    color: "white",
    width:'150px',
    height:'30px',
    borderRadius:'5px',
    fontSize:'15px'
  }
  // setInterval(() => {
  //   updateContador(contadorValue + 1)
  // }, 2000);

  return (
    <>
      <p>El valor es:</p>
      <Counter number={contador} />

      <h1 style={{ color: color }}>{evalnumber}</h1>
      <br></br>
      <button style={stylebutton} onClick={handleClick}>

        Incrementar
      </button>
      <button onClick={handleClickReset}>

        Reset
      </button>
      {/* <button onClick={()=>{
        setContador(contador + 1)
        // setContador(prevContador => {
        //   return prevContador + 1
        // })
      }}>
        Incrementar
      </button> */}
    </>
  )

}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
