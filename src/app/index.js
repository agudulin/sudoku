import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from 'common/general/actions'
import { Board, StatusPane } from 'components'

import './index.css'

class App extends Component {
  componentDidMount () {
    const { initBoard } = this.props

    initBoard()
  }

  render () {
    const {
      board,
      changeNumber,
      conflictColumn,
      conflictRow,
      gameOver,
      initialBoard,
      loading,
      validBoard
    } = this.props

    return (
      <div className='app'>
        <StatusPane gameOver={gameOver} validBoard={validBoard} />
        <Board
          board={board || initialBoard}
          changeNumber={changeNumber}
          conflictColumn={conflictColumn}
          conflictRow={conflictRow}
          initialBoard={initialBoard}
          loading={loading}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  conflictColumn: state.general.conflictColumn,
  conflictRow: state.general.conflictRow,
  board: state.general.board,
  initialBoard: state.general.initialBoard,
  gameOver: state.general.gameOver,
  loading: state.general.loading,
  validBoard: state.general.validBoard
})

export default connect(mapStateToProps, actions)(App)
