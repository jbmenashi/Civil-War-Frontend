const initialState = {
  allEvents: [],
  dailyEvents: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_EVENTS':
      return {...state, allEvents: action.payload}
    case "SET_DAILY_EVENTS":
      return {...state, dailyEvents: action.payload}
    default:
      return state
  }
}
