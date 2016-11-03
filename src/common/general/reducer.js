import {
  FETCH_BOARD_START,
  FETCH_BOARD_SUCCESS,
  FETCH_BOARD_ERROR
} from './actions'

const initialState = {
  board: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
  ],
  loading: false
}

export default (state = initialState, action) => {
  const updateState = {
    [FETCH_BOARD_START]: () => (
      Object.assign({}, state, { loading: true })
    ),
    [FETCH_BOARD_ERROR]: () => (
      Object.assign({}, state, { loading: false })
    ),
    [FETCH_BOARD_SUCCESS]: ({ sudokuBoard: board }) => (
      Object.assign({}, state, { board, loading: false })
    )
  }[action.type]

  if (typeof updateState === 'function') return updateState(action.payload)

  return state
}
