import React from 'react'
import cx from 'classnames'

import './index.css'

const StatusPane = ({ gameOver, validBoard }) => (
  <div className={cx('status-pane', { 'status-pane--active': !validBoard || gameOver })}>
    {
      !validBoard ? '👺 Error! There is a conflict.'
      : gameOver ? '👾 Congratulations!'
      : ''
    }
  </div>
)

export default StatusPane
