import React from 'react';
import { FaCheckCircle,FaInfoCircle } from "react-icons/fa";
import { IoMdRefreshCircle } from "react-icons/io";
import MyVerticallyCenteredModal from './Alert';
import MyVerticallyCenteredErrorModal from './ErrorAlert';
import '../Sudoku.css'
import Button from './Button';
import { Work } from './Work';

const Sudoku = () => {

  const{state,modalShow,errorModalShow,setModalShow,setErrorModalShow,handleButton,handleErase,handleCell,handleHint,handleSolve,handleReset}=Work()

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
              :<span id='unHint'> {state.count>=0? state.count:''}</span> }
              {/* : <FcNoIdea id='unHint'/>} */}
          </div>
          <div>
            <FaCheckCircle id='solve' onClick={handleSolve}/>
          </div>
        </div>

        <div className="board">
          {
            state.board && state.status ? state.board.map((cell, i) => (
              <button className={
                cell !== null ? 'nonEmpty' :'cellDiv'
              } onClick={(e) => { handleCell(e,i) }} key={i}>
                {cell === null ? '' : cell}</button>

            )) : state.hint.map((cell, i) => (
              <button className={
                cell === null ? 'cellDiv' :
                Number(state.board[i]) !== state.solveBoard[i] ? 'redAlert' : 
                cell !== null ? 'nonEmpty' :'cellDiv'
              } key={i}>
                {cell === null ? '' : cell}</button>
            ))
          }
        </div>


        <Button handleButton={handleButton} handleErase={handleErase}/>

        
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() =>setModalShow(false)}
      />
        <MyVerticallyCenteredErrorModal
        show={errorModalShow} 
        onHide={() => setErrorModalShow(false)}
      />
      </main>
      
    </div>
  )
}

export default Sudoku;
