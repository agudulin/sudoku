import React from 'react'
import uniqueId from 'lodash.uniqueid'

import './index.css'

const data = {'sudokuBoard':[[7,0,0,0,4,0,5,3,0],[0,0,5,0,0,8,0,1,0],[0,0,8,5,0,9,0,4,0],[5,3,9,0,6,0,0,0,1],[0,0,0,0,1,0,0,0,5],[8,0,0,7,2,0,9,0,0],[9,0,7,4,0,0,0,0,0],[0,0,0,0,5,7,0,0,0],[6,0,0,0,0,0,0,5,0]]}

const Board = () => (
  <div className='board'>
    <table className='board__table'>
      <tbody>
        {
          data.sudokuBoard.map(row => (
            <tr className='board__row' key={uniqueId()}>
              { row.map(cell =>
                  <td className='board__cell' key={uniqueId()}>{ cell }</td>
                )
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
)

export default Board
