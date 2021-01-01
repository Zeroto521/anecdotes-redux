import service from '../services/anecdotes'


const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT':
      return action.data
    case 'NEW':
      return [...state, action.data]
    case 'VOTE':
      const id = action.data.id
      const newState = state.map(as =>
        as.id !== id ? as : { ...as, 'votes': as.votes + 1 }
      )
      return newState.sort((a, b) => b.votes - a.votes)
    default:
      return state
  }
}

const initialize = (anecdotes) => {
  return async dispatch => {
    const data = await service.getAll()
    dispatch({
      'type': 'INIT',
      data,
    })
  }
}

const create = (content) => {
  return async dispatch => {
    const data = await service.createNew(content)
    dispatch({
      'type': 'NEW',
      data
    })
  }
}

const vote = (id) => ({
  'type': 'VOTE',
  'data': { id }
})

export { create, vote, initialize }
export default reducer
