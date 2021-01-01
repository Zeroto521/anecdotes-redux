const reducer = (state = null, action) => {
  switch (action.type) {
    case 'NOTIFY':
      return action.data.message
    case 'MUTE':
      return null
    default:
      return state
  }
}

const notify = (message) => ({
  'type': 'NOTIFY',
  'data': { message }
})

const mute = () => ({
  'type': 'MUTE'
})

export { notify, mute }
export default reducer
