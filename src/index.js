import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import reducer from './reducers/anecdoteReducer'

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