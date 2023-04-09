import { useEffect, useState } from "react";
import sudoku from "sudoku";

export const Work = () => {

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
    count: null
  })

// CountDown
  useEffect(() => {
    let timer;
    if (state.count >= 0) {
      timer = setTimeout(() => {
        setState({ ...state, count: state.count - 1 })
      }, 1000);
    }
    else {
      clearTimeout(timer)
    }
    return () => clearTimeout(timer)
  })

//  Handle Hint
  let handleHint = () => {
    setState({ ...state, hint: state.board, count: 3, status: false });
    setTimeout(() => {
      handleUnHint(); // call handleUnHint after 3 seconds
    }, 4000);
  }

// Handle UnHint
  let handleUnHint = () => {
    setState({ ...state, hint: '', status: true })
  }

// Solving the Suduko
  const handleSolve = () => {
    let myState = state.board.join('')
    let solvedState = state.solveBoard.join('')
  
    if (myState === solvedState) {
      setModalShow(true)
      handleReset()
    }
    else {
      setErrorModalShow(true)
    }
  }

// Select the Sudoku cell for Entering the values & Share the index for erase the previous value
  const handleCell = (e, i) => {
    setState({ ...state, erase: i })
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
    setState({ ...state, initialBoard, solveBoard, board: initialBoard })
  }
  return { state, modalShow, setModalShow, setErrorModalShow, errorModalShow, handleErase, handleReset, handleButton, handleCell, handleHint, handleUnHint, handleSolve };
};