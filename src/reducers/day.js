const initialState = {
  days: [],
  currentDay: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_DAYS":
      return {...state, days: action.payload}
    case "SET_ACTIVE_DAY":
      return {...state, currentDay: action.payload}
    default:
      return state
  }
}
