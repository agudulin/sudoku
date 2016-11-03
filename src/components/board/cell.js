import React from 'react'

import './index.css'

const Cell = ({ number }) => (
  <td className='board__cell'>
    {
      number === 0
        ? <input className='board__input' type='text' />
        : number
    }
  </td>
)

export default Cell
