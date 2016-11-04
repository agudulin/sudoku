import React from 'react'
import cx from 'classnames'

import './index.css'

const Cell = ({
  cell,
  changeNumber,
  conflictColumn,
  conflictRow,
  editable,
  number,
  row
}) => {
  const classNames = cx('board__input', {
    'board__input--default': !editable,
    'board__input--error': cell === conflictColumn && row === conflictRow
  })

  return (
    <td className='board__cell'>
      <input
        className={classNames}
        disabled={!editable}
        maxLength='1'
        type='text'
        onChange={(e) => changeNumber({ cell, row, value: e.target.value })}
        value={number || ''}
      />
    </td>
  )
}

export default Cell
