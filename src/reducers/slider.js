const initialState = {
  sliderValue: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "SLIDE":
      return {...state, sliderValue: action.payload}
    default:
      return state
  }
}
