import React from 'react';
// import {Work} from './Work';
import '../Sudoku.css'
 

const Button = ({handleButton,handleCheck,state}) => {
    // const{handleButton,handleErase}=Work()
  return (
    <div className="buttons">
          <button onClick={(e) => {handleButton(e) }}>1</button>
          <button onClick={(e) => { handleButton(e) }}>2</button>
          <button onClick={(e) => { handleButton(e) }}>3</button>
          <button onClick={(e) => { handleButton(e) }}>4</button>
          <button onClick={(e) => { handleButton(e) }}>5</button>
          <button onClick={(e) => { handleButton(e) }}>6</button>
          <button onClick={(e) => { handleButton(e) }}>7</button>
          <button onClick={(e) => { handleButton(e) }}>8</button>
          <button onClick={(e) => { handleButton(e) }}>9</button>
          {state.count===null?
            <button id='check' onClick={handleCheck} >Check</button>:
            <button id='count'>{state.count}</button>
          }
        </div>
  )
}

export default Button
