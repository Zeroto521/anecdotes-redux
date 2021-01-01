import { useSelector, useDispatch } from 'react-redux'
import React from 'react'

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
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Anecdotes</h2>
      <div>
        {
          anecdotes.map(anecdote =>
            <Anecdote key={anecdote.id} anecdote={anecdote}
              handleClick={() => dispatch(vote(anecdote.id))} />
          )
        }
      </div>
    </div>
  )
}

export default Anecdotes
