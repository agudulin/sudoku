import reqwest from 'reqwest'

export const FETCH_BOARD_START = 'FETCH_BOARD_START'
export const FETCH_BOARD_SUCCESS = 'FETCH_BOARD_SUCCESS'
export const FETCH_BOARD_ERROR = 'FETCH_BOARD_ERROR'
export const UPDATE_BOARD_START = 'UPDATE_BOARD_START'
export const UPDATE_BOARD_SUCCESS = 'UPDATE_BOARD_SUCCESS'
export const UPDATE_BOARD_ERROR = 'UPDATE_BOARD_ERROR'

export const initBoard = () => ({ dispatch, getState }) => {
  return fetchBoard()
}

export const changeNumber = ({ cell, row, value }) => ({ dispatch, getState }) => {
  const number = value.replace(/[^0-9]/g, '')

  const { board } = getState().general
  const data = {
    sudokuBoard: board,
    moveRow: row,
    moveColumn: cell,
    moveValue: number
  }

  return updateBoard(data)
}

const fetchBoard = () => ({
  type: 'FETCH_BOARD',
  payload: {
    data: {},
    promise: reqwest({
      crossOrigin: true,
      url: 'https://afternoon-mountain-94217.herokuapp.com/sudoku/'
    })
  }
})

const updateBoard = (data) => ({
  type: 'UPDATE_BOARD',
  payload: {
    data,
    promise: reqwest({
      data: JSON.stringify(data),
      type: 'json',
      contentType: 'application/json',
      method: 'put',
      crossOrigin: true,
      url: 'https://afternoon-mountain-94217.herokuapp.com/sudoku/'
    })
  }
})
