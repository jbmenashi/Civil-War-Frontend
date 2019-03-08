const initialState = {
  selectedTitle: undefined,
  selectedInfo: undefined,
  selectedLink: undefined
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_LOG_EVENT":
      return {...state, selectedTitle: action.title, selectedInfo: action.info, selectedLink: action.link}
    default:
      return state
  }
}
