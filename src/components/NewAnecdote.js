import { useDispatch } from 'react-redux'
import React from 'react'

import { create } from '../reducers/anecdoteReducer'
import { notify, mute } from '../reducers/notificationReducer'
import service from '../services/anecdotes'

const NewAnecdote = () => {
  const dispatch = useDispatch()

  const createAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = ''
    const newAnecdote = await service.createNew(content)
    dispatch(create(newAnecdote))
    dispatch(notify(`You created '${newAnecdote.content}'`))
    setTimeout(() => dispatch(mute()), 3000)
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
