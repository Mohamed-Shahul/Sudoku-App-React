import React from 'react';
import { TiDelete } from "react-icons/ti";
// import {Work} from './Work';
import '../Sudoku.css'
 

const Button = ({handleButton,handleErase}) => {
    // const{handleButton,handleErase}=Work()
  return (
    <div className="buttons">
          <button onClick={(e) => {handleButton(e) }}>0</button>
          <button onClick={(e) => { handleButton(e) }}>1</button>
          <button onClick={(e) => { handleButton(e) }}>2</button>
          <button onClick={(e) => { handleButton(e) }}>3</button>
          <button onClick={(e) => { handleButton(e) }}>4</button>
          <button onClick={(e) => { handleButton(e) }}>5</button>
          <button onClick={(e) => { handleButton(e) }}>6</button>
          <button onClick={(e) => { handleButton(e) }}>7</button>
          <button onClick={(e) => { handleButton(e) }}>8</button> 
           <TiDelete id='erase' onClick={handleErase}/>
        </div>
  )
}

export default Button
