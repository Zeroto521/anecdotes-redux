const reducer = (state = null, action) => {
  switch (action.type) {
    case 'NOTIFY':
      return action.data.message
    default:
      return null
  }
}

const notify = (message) => ({
  'type': 'NOTIFY',
  'data': { message }
})


export default reducer
