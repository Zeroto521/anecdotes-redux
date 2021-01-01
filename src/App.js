import { useDispatch } from 'react-redux'
import React, { useEffect } from 'react'

import { initialize } from './reducers/anecdoteReducer'
import Anecdotes from './components/Anecdotes'
import FilterAnecdotes from './components/FilterAnecdotes'
import NewAnecdote from './components/NewAnecdote'
import Notification from './components/Notification'
import service from './services/anecdotes'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    service.getAll().then(
      data => dispatch(initialize(data)))
  }, [dispatch])

  return (
    < div >
      <h2>Anecdotes</h2>
      <Notification />
      <FilterAnecdotes />
      <Anecdotes />
      <NewAnecdote />
    </div >
  )
}


export default App
