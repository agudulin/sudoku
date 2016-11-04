import {
  FETCH_BOARD_START,
  FETCH_BOARD_SUCCESS,
  FETCH_BOARD_ERROR,
  UPDATE_BOARD_START,
  UPDATE_BOARD_SUCCESS,
  UPDATE_BOARD_ERROR
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
  inputNumber: '',
  loading: false,
  validBoard: true
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
    ),
    [UPDATE_BOARD_START]: ({ moveColumn, moveRow, moveValue }) => {
      const newBoard = [...state.board]
      newBoard[moveRow][moveColumn] = moveValue

      return Object.assign({}, state, { board: newBoard, loading: true })
    },
    [UPDATE_BOARD_ERROR]: ({ conflictRow, conflictColumn, valid, gameOver }) => (
      Object.assign({}, state, { loading: false, validBoard: valid })
    ),
    [UPDATE_BOARD_SUCCESS]: ({ board, valid, gameOver }) => (
      Object.assign({}, state, { board, loading: false, validBoard: valid })
    )
  }[action.type]

  if (typeof updateState === 'function') return updateState(action.payload)

  return state
}
