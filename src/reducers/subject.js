const initialState = {
  subjects: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_SUBJECTS":
      return {...state, subjects: action.payload}
    default:
      return state
  }
}
