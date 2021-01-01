import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'

import anecdoteReducer from './reducers/anecdoteReducer'
import App from './App'
import notificationReducer from './reducers/notificationReducer'

const reducer = combineReducers({
  'anecdotes': anecdoteReducer,
  'notification': notificationReducer
})

const store = createStore(
  reducer,
  composeWithDevTools()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)