const initialState = {
}

export default (state = initialState, action) => {
  const updateState = {

  }[action.type]

  if (typeof updateState === 'function') return updateState(action.payload)

  return state
}
