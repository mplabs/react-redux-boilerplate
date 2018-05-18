import { compose, createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

import { rootEpic } from './epics'
import { reducer } from './reducer'
import * as actions from './actions'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const epicMiddleware = createEpicMiddleware(rootEpic)
const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(epicMiddleware))
)

export { actions, reducer, store }
