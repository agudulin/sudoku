import {
  FETCH_BOARD_START,
  FETCH_BOARD_SUCCESS,
  FETCH_BOARD_ERROR,
  UPDATE_BOARD_START,
  UPDATE_BOARD_SUCCESS,
  UPDATE_BOARD_ERROR
} from './actions'

const initialState = {
  board: null,
  conflictRow: -1,
  conflictColumn: -1,
  initialBoard: [
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
    [FETCH_BOARD_SUCCESS]: ({ sudokuBoard: initialBoard }) => (
      Object.assign({}, state, {
        initialBoard,
        board: JSON.parse(JSON.stringify(initialBoard)),
        loading: false
      })
    ),
    [UPDATE_BOARD_START]: ({ moveColumn, moveRow, moveValue }) => {
      const newBoard = JSON.parse(JSON.stringify(state.board))
      newBoard[moveRow][moveColumn] = moveValue

      return Object.assign({}, state, { board: newBoard, loading: true })
    },
    [UPDATE_BOARD_ERROR]: ({ response }) => {
      let parsedResponse = {}
      try { parsedResponse = JSON.parse(response) } catch (e) { }

      const { conflictRow, conflictColumn, valid: validBoard, gameOver } = parsedResponse

      return Object.assign({}, state, {
        gameOver,
        loading: false,
        validBoard,
        conflictRow,
        conflictColumn
      })
    },
    [UPDATE_BOARD_SUCCESS]: ({ board, valid, gameOver }) => (
      Object.assign({}, state, {
        conflictRow: -1,
        conflictColumn: -1,
        board,
        gameOver,
        loading: false,
        validBoard: valid
      })
    )
  }[action.type]

  if (typeof updateState === 'function') return updateState(action.payload)

  return state
}
