import React from 'react'
import cx from 'classnames'

import './index.css'

const ErrorPane = ({ validBoard }) => (
  <div className={cx('error-pane', { 'error-pane--active': !validBoard })}>
    Error!
  </div>
)

export default ErrorPane
