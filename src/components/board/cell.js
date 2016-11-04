import React from 'react'
import cx from 'classnames'

import './index.css'

const Cell = ({ cell, changeNumber, number, row }) => (
  <td className='board__cell'>
    <input
      className={cx('board__input', { 'board__input--default': number === 0 })}
      maxLength='1'
      type='text'
      onChange={(e) => changeNumber({ cell, row, value: e.target.value })}
      value={number || ''}
    />
  </td>
)

export default Cell
