import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from 'common/general/actions'
import { Board } from 'components'

import './index.css'

class App extends Component {
  render () {
    return (
      <div className='app'>
        <Board />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, actions)(App)
