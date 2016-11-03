import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from 'common/general/actions'
import { Board, Spinner } from 'components'

import './index.css'

class App extends Component {
  componentDidMount () {
    const { initBoard } = this.props

    initBoard()
  }

  render () {
    const { board, loading } = this.props

    return (
      <div className='app'>
        <Spinner loading={loading} />
        <Board board={board} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  board: state.general.board,
  loading: state.general.loading
})

export default connect(mapStateToProps, actions)(App)
