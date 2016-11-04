import React from 'react'
import uniqueId from 'lodash.uniqueid'

import Cell from './cell'
import Spinner from 'components/spinner'
import './index.css'

const Board = ({ board, changeNumber, conflictColumn, conflictRow, loading }) => (
  <div className='board'>
    <Spinner loading={loading} />
    <table className='board__table'>
      <tbody>
        {
          board.map((row, rowIdx) => (
            <tr className='board__row' key={uniqueId()}>
              {
                row.map((cell, cellIdx) => (
                  <Cell
                    cell={cellIdx}
                    changeNumber={changeNumber}
                    conflictColumn={conflictColumn}
                    conflictRow={conflictRow}
                    key={uniqueId()}
                    number={cell}
                    row={rowIdx}
                  />
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
)

export default Board
