import React from 'react'

import Anecdotes from './components/Anecdotes'
import NewAnecdote from './components/NewAnecdote'
import Notification from './components/Notification'

const App = () => (
  <div>
    <h2>Anecdotes</h2>
    <Notification />
    <Anecdotes />
    <NewAnecdote />
  </div>
)


export default App
