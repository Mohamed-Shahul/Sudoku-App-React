import React, { useState } from 'react';
import { TiDelete } from "react-icons/ti";
import { FaCheckCircle,FaInfoCircle } from "react-icons/fa";
import { FcNoIdea } from "react-icons/fc";
import { IoMdRefreshCircle } from "react-icons/io";
import MyVerticallyCenteredModal from './Alert';
import MyVerticallyCenteredErrorModal from './ErrorAlert';
import sudoku from "sudoku";
import './Sudoku.css'

const SudokuState = () => {

// Success Alert & Error Alert State
  const [modalShow, setModalShow] = useState(false);
  const [errorModalShow, setErrorModalShow] = useState(false);

// Board State
  const initialBoard = sudoku.makepuzzle();
  const solveBoard = sudoku.solvepuzzle(initialBoard);
  const [state, setState] = useState({
    initialBoard,
    solveBoard,
    board: initialBoard,
    hint: '',
    status: true,
    erase: '',
    target:false
  })

//  Handle UnHint
  let handleHint = () => {
    setState({...state,hint:state.solveBoard,status:false});
  }

// Handle UnHint
  let handleUnHint = () => {
    setState({ ...state, hint: '', status: true })
  }

// Solving the Suduko
  const handleSolve = () => {
    let myState=state.board.map(Number)
    if (state.solveBoard === myState.board || state.hint === state.solveBoard) {
      setModalShow(true)
      handleReset()
    }
    else {
      setErrorModalShow(true)
    }
  }

// Select the Sudoku cell for Entering the values & Share the index for erase the previous value
  const handleCell = (i,e) => {
    setState({ ...state, erase: i})    
  }

// Get the Button text to Suduko Cell
  const handleButton = (e) => {
    const i = state.erase;
    let newState = { ...state };
    newState.board[i] = e.target.innerText;
    setState(newState);
  }

// Erase the Previous Suduko Value
  const handleErase = () => {
    const i = state.erase;
    let newState = { ...state };
    newState.board[i] = null;
    setState(newState);
  }

// Reset the Suduko
  const handleReset = () => {
    const initialBoard = sudoku.makepuzzle();
    const solveBoard = sudoku.solvepuzzle(initialBoard);
    setState({...state,initialBoard,solveBoard,board:initialBoard})
  }

  return (
    <div>
      <header>
        <h1>Sudoku App</h1>
      </header>
      <main>
        <div className='solRes'>
          <div>
            <IoMdRefreshCircle id='reset' onClick={handleReset}/>
            {state.status ? < FaInfoCircle id='hint' onClick={handleHint} />
              : <FcNoIdea id='unHint' onClick={handleUnHint} />}
          </div>
          <div>
            <FaCheckCircle id='solve' onClick={handleSolve}/>
          </div>
        </div>

        <div className={state.target?"error":"board"}>
          {
            state.board && state.status ? state.board.map((cell, i) => (
              <button className={
                cell === null ? 'cellDiv' :
                Number(state.board[i]) !== state.solveBoard[i] ? 'redAlert' : 
                cell !== null ? 'nonEmpty' :'cellDiv'
              } onClick={(e) => { handleCell(i,e) }} key={i}>
                {cell === null ? '' : cell}</button>

            )) : state.hint.map((cell, i) => (
              <button className={cell === null ? 'cellDiv' : 'nonEmpty'} onClick={(e) => { handleCell(i) }} key={i}>
                {cell === null ? '' : cell}</button>
            ))
          }
        </div>

        <div className="buttons">
          <button onClick={(e) => { handleButton(e) }}>0</button>
          <button onClick={(e) => { handleButton(e) }}>1</button>
          <button onClick={(e) => { handleButton(e) }}>2</button>
          <button onClick={(e) => { handleButton(e) }}>3</button>
          <button onClick={(e) => { handleButton(e) }}>4</button>
          <button onClick={(e) => { handleButton(e) }}>5</button>
          <button onClick={(e) => { handleButton(e) }}>6</button>
          <button onClick={(e) => { handleButton(e) }}>7</button>
          <button onClick={(e) => { handleButton(e) }}>8</button>
          <button onClick={(e) => { handleButton(e) }}>9</button>
          <TiDelete id='erase' onClick={handleErase}/>
        </div>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        <MyVerticallyCenteredErrorModal
        show={errorModalShow}
        onHide={() => setErrorModalShow(false)}
      />
      </main>
      
    </div>
  )
}

export default SudokuState;
