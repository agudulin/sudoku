import { applyMiddleware, compose, createStore } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'

import appReducer from './reducer'

export default () => {
  const injectMiddleware = ({ getState, dispatch }) => next => action =>
    next(typeof action === 'function'
      ? action({ dispatch, getState })
      : action
    )

  const middleware = [
    injectMiddleware,
    promiseMiddleware({
      promiseTypeSuffixes: ['START', 'SUCCESS', 'ERROR']
    })
  ]

  const enhancers = [applyMiddleware(...middleware)]

  if (window.devToolsExtension) {
    enhancers.push(window.devToolsExtension())
  }

  return createStore(appReducer, {}, compose(...enhancers))
}
