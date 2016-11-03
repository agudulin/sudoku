import reqwest from 'reqwest'

export const FETCH_BOARD_START = 'FETCH_BOARD_START'
export const FETCH_BOARD_SUCCESS = 'FETCH_BOARD_SUCCESS'
export const FETCH_BOARD_ERROR = 'FETCH_BOARD_ERROR'

export const initBoard = () => ({ dispatch, getState }) => {
  return fetchBoard()
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
