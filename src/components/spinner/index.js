import React from 'react'
import cx from 'classnames'

import './index.css'

const Spinner = ({ loading }) => (
  <div className={cx('spinner', { 'spinner--active': loading })}>
    Loading…
  </div>
)

export default Spinner
