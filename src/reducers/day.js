const initialState = {
  days: [],
  currentDay: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_DAYS":
      return {...state, days: action.payload}
    case "SET_CURRENT_DAY":
      return {...state, currentDay: action.payload}
    default:
      return state
  }
}
