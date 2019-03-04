const initialState = {
  activeCircles: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_ACTIVE_CIRCLES":
      return {...state, activeCircles: action.payload}
    default:
      return state
  }
}
