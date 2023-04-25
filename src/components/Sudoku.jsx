import React from 'react';
import MyVerticallyCenteredModal from './Alert';
import MyVerticallyCenteredErrorModal from './SuccessAlert';
import '../Sudoku.css'
import Button from './Button';
import { Work } from './Work';
import Header from './Header';

const Sudoku = () => {

  const { state,setState,handleButton, handleCheck, handleCell, handleNewGame, handleReset } = Work()

  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <div className='sudokuBoardBox'>
          <div className='actionButtons'>
            <button onClick={handleReset} id='reset'>Reset</button>
            <button id='restart' onClick={handleNewGame}>New Game</button>
          </div>

          <div className="board">
            <table>
              <tbody>
                {state.hintStatus ? state.board.map((rowValues, rowI) => (
                  <tr key={rowI}>
                    {rowValues.map((cellVal, colI) => (
                      <td className={
                        cellVal === null ? 'backWhite' :
                            cellVal !== null ? (typeof cellVal ==='string'?'backWhite':'nonEmpty'):''
                      } tabIndex={0}
                        onClick={(e) => { handleCell(e, rowI, colI) }} key={`${rowI}-${colI}`}>
                        {cellVal}
                      </td>
                    ))}
                  </tr>
                )) : 
                  state.board.map((rowValues, rowI) => (
                    <tr key={rowI}>
                      {rowValues.map((cellVal, colI) => (
                        <td className={
                          cellVal === null ? 'backWhite' :
                            cellVal !== null ?
                              (
                                typeof cellVal === 'string'
                                  ? (cellVal === state.solvedPuzzle[rowI][colI].toString() ? 'backWhite' : 'redAlert')
                                  : (cellVal === state.solvedPuzzle[rowI][colI] ? 'nonEmpty' : 'redAlert')
                              ) : ''
                        } tabIndex={0}
                          onClick={(e) => { handleCell(e, rowI, colI) }} key={`${rowI}-${colI}`}>
                          {cellVal}
                        </td>
                      ))}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        <Button handleButton={handleButton} handleCheck={handleCheck} state={state}/>
      </main>


      <MyVerticallyCenteredModal 
        show={state.modalShow}
        onHide={() =>setState({...state,modalShow:false,newGameStatus:true}) }
        onHideCancel={()=>setState({...state,modalShow:false,newGameStatus:false})}
      />
      <MyVerticallyCenteredErrorModal
        show={state.errorModalShow}
        onHide={() => setState({...state,errorModalShow:false,newGameStatus:true})}
      />
    </div>
  )
}

export default Sudoku;