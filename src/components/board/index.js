import React from 'react'
import uniqueId from 'lodash.uniqueid'

import Cell from './cell'
import './index.css'

const Board = ({ board }) => (
  <div className='board'>
    <table className='board__table'>
      <tbody>
        {
          board.map(row => (
            <tr className='board__row' key={uniqueId()}>
              { row.map(cell => <Cell key={uniqueId()} number={cell} />) }
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
)

export default Board
