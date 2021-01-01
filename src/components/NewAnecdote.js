import { useDispatch } from 'react-redux'
import React from 'react'

import { create } from '../reducers/anecdoteReducer'

const NewAnecdote = () => {
  const dispatch = useDispatch()

  const createAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = ''
    dispatch(create(content))
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={(event) => createAnecdote(event)}>
        <div><input name="content" /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default NewAnecdote
