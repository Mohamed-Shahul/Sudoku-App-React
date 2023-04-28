import { useEffect, useState } from "react";
import sudoku from "sudoku";

export const Work = () => {

// Create a Sudoku Puzzle's
  const initialBoard = sudoku.makepuzzle();
  const solvedBoard = sudoku.solvepuzzle(initialBoard)

// Add a Sudoku puzzle value+1
  let puzzle = initialBoard.map((cell) =>cell !== null ? cell + 1 : null)
  let solvedPuzzle = solvedBoard.map((cell) => cell + 1)

// Create a 2D Array for list out The Sudoku Table
  let puzzle2D = []
  for (let row = 0; row < 9; row++) {
    const newRow = []
    for (let col = 0; col < 9; col++) {
      let i = row * 9 + col
      newRow.push(puzzle[i])
    }
    puzzle2D.push(newRow)
  }
  let SolvedPuzzle2D = []
  for (let row = 0; row < 9; row++) {
    const newRow = []
    for (let col = 0; col < 9; col++) {
      let i = row * 9 + col
      newRow.push(solvedPuzzle[i])
    }
    SolvedPuzzle2D.push(newRow)
  }

// Sudoku State
  const [state, setState] = useState({
    initialPuzzle:puzzle2D,
    solvedPuzzle: SolvedPuzzle2D,
    board:puzzle2D,
    selectedRowI: '',
    selectedColI: '',
    target: '',
    hint: '',
    hintStatus: true,
    count: null,
    modalShow: false,
    errorModalShow: false,
    resetAlert:false,
    newGameStatus: false
  })

// Auto Solve Once fill the All Cells
useEffect(()=>{
  const strPuzzle = state.board.flat().map(val => val === null ? '.' : val).join('');
  const strSolvedPuzzle=state.solvedPuzzle.flat().map(val=>val).join('')

  if(strPuzzle===strSolvedPuzzle){
    setState(prevState=>({...prevState,errorModalShow:true}))
  }
},[state.board,state.solvedPuzzle])

// Check the Errors
  let handleCheck = () => {    
    setState({ ...state, hint: state.board, hintStatus: false, count: 3 })
    setTimeout(handleUnHint, 3000)
  }

// Error's Show CountDown
useEffect(() => {
    const timer = state.count > 0 && setInterval(() => setState(prevState => ({ ...prevState, count: prevState.count - 1 })), 1000)
    return () => clearInterval(timer)
}, [state])

// Handle UnHint
  let handleUnHint = () => {
    setState({ ...state, hint: '', hintStatus: true, count: null })
  }

// Select the Sudoku cell for Entering the values 
  const handleCell = (e, rowI, colI) => {
    setState({ ...state, selectedRowI: rowI, selectedColI: colI, target: e.target })
  }

// Get the Button text to Suduko Cell
  const handleButton = (e) => {
    const RowI = state.selectedRowI;
    const ColI = state.selectedColI;
    if (RowI !== '') {
      let newState = { ...state };
      newState.board[RowI][ColI] = newState.board[RowI][ColI] !== null ? newState.board[RowI][ColI] : e.target.innerText
      setState(newState);
    }
  }

// Reset the Suduko
const handleReset = () => {
  let copy=state.initialPuzzle.map((rowVal)=>(
    rowVal.map((cell)=>(
      typeof cell==='string'?null:cell
    ))
  ))
  // setState({ ...state, board:copy });
  setState({...state,hint:copy,resetAlert:true})
}

  // Start the New Sudoku

  const handleNewGame = () => {
    setState({ ...state, modalShow: true })
  }
  if (state.newGameStatus) {
      setState({
        initialPuzzle: puzzle2D,
        solvedPuzzle: SolvedPuzzle2D,
        board: puzzle2D,
        selectedRowI: '',
        selectedColI: '',
        target: '',
        hint: '',
        hintStatus: true,
        count: null,
        modalShow: false,
        errorModalShow: false,
        resetAlert:false,
        newGameStatus: false
      })
  }

  return { state, setState, handleReset, handleButton, handleCell, handleCheck, handleUnHint, handleNewGame };
};