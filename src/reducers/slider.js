const initialState = {
  sliderValue: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "SLIDE":
      return {...state, sliderValue: action.payload}
    case "ADVANCE":
      return {...state, sliderValue: state.sliderValue + 1}
    case "RETREAT":
      return {...state, sliderValue: state.sliderValue - 1}
    default:
      return state
  }
}
