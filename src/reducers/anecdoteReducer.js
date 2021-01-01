const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (content) => ({
  'content': content,
  'id': getId(),
  'votes': 0
})

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'VOTE':
      const newState = state.map(as =>
        as.id !== action.data.id ? as : { ...as, 'votes': as.votes + 1 }
      )
      newState.sort((a, b) => b.votes - a.votes)
      return newState
    case 'NEW':
      return [...state, action.data]
    default:
      return state
  }
}

const create = (content) => ({
  'type': 'NEW',
  'data': asObject(content)
})

const vote = (id) => ({
  'type': 'VOTE',
  'data': { id }
})

export { create, vote }
export default reducer
