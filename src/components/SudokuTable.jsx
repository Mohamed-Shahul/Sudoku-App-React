import React from 'react';
import Button from 'react-bootstrap/Button';

const SudokuTable = ({handleReset,handleNewGame,handleCell,state}) => {
  return (
    <div className='sudokuBoardBox'>
          <div className='actionButtons'>
            <Button className='btn btn-danger' onClick={handleReset}>Reset</Button>
            <Button className='btn btn-success' onClick={handleNewGame}>New Game</Button>
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
  )
}

export default SudokuTable
