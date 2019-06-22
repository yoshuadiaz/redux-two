import actionTypes from './Planets.actions'

const initialState = {
  isLoading: false,
  hasError: false,
  data: null
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_PLANETS:
      return {
        ...state, isLoading: true
      }
      case actionTypes.LOAD_PLANETS_SUCCESS:
        return {
          ...state, isLoading: false, hasError: false, data: action.payload
        }
        case actionTypes.LOAD_PLANETS_FAILURE:
          return {
            ...state, isLoading: false, hasError: true
          }
          default:
            return state
  }
}

export default reducer