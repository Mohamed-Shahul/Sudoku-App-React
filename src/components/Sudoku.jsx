import React from 'react';
import NewGameAlert from './alertComponents/NewGameAlert';
import SuccessAlert from './alertComponents/SuccessAlert';
import '../Sudoku.css'
import Button from './Button';
import { Work } from './Work';
import Header from './Header';
import ResetAlert from './alertComponents/ResetAlert';
import SudokuTable from './SudokuTable';

const Sudoku = () => {

  const { state,setState,handleButton, handleCheck, handleCell, handleNewGame, handleReset } = Work()

  return (
    <div>
      <header><Header /></header>

      <main>
        <SudokuTable state={state} handleCell={handleCell} handleReset={handleReset} handleNewGame={handleNewGame}/>
        <Button handleButton={handleButton} handleCheck={handleCheck} state={state}/>
      </main>

      <NewGameAlert 
        show={state.modalShow}
        onHide={() =>setState({...state,modalShow:false,newGameStatus:true}) }
        onHideCancel={()=>setState({...state,modalShow:false,newGameStatus:false})}
      />

      <SuccessAlert
        show={state.errorModalShow}
        onHide={() => setState({...state,errorModalShow:false,newGameStatus:true})}
      />

      <ResetAlert
        show={state.resetAlert}
        onHide={() => setState({...state,board:state.hint,resetAlert:false})}
        onHideCancel={() => setState({...state,resetAlert:false})}
      />
    </div>
  )
}
export default Sudoku;