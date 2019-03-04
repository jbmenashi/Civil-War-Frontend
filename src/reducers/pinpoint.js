const initialState = {
  activePinpoints: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACTIVE_PINPOINTS":
      return {...state, activePinpoints: action.payload}
    default:
      return state
  }
}
