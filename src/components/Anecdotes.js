import { useSelector, useDispatch } from 'react-redux'
import React from 'react'

import { notify, mute } from '../reducers/notificationReducer'
import { vote } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote, handleClick }) => (
  <div>
    <div>
      {anecdote.content}
    </div>
    <div>
      has {anecdote.votes}
      <button onClick={handleClick}>vote</button>
    </div>
  </div>
)


const Anecdotes = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  const handleVote = (anecdote) => {
    dispatch(vote(anecdote.id))
    dispatch(notify(`You voted '${anecdote.content}'`))
    setTimeout(() => dispatch(mute()), 3000)
  }

  return (
    <div>
      <div>
        {
          anecdotes.map(anecdote =>
            <Anecdote key={anecdote.id} anecdote={anecdote}
              handleClick={() => handleVote(anecdote)} />
          )
        }
      </div>
    </div>
  )
}

export default Anecdotes
