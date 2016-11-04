import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from 'common/general/actions'
import { Board, ErrorPane } from 'components'

import './index.css'

class App extends Component {
  componentDidMount () {
    const { initBoard } = this.props

    initBoard()
  }

  render () {
    const { board, changeNumber, loading, validBoard } = this.props

    return (
      <div className='app'>
        <ErrorPane validBoard={validBoard} />
        <Board board={board} changeNumber={changeNumber} loading={loading} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  board: state.general.board,
  loading: state.general.loading,
  validBoard: state.general.validBoard
})

export default connect(mapStateToProps, actions)(App)
