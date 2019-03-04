const initialState = {
  dailyEvents: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_DAILY_EVENTS":
      return {...state, dailyEvents: action.payload}
    default:
      return state
  }
}
