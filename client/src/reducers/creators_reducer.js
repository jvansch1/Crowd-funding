import { RECEIVE_CREATORS } from '../actions/creators.js'

const initialState = {
  creators: []
}

const CreatorsReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_CREATORS:
    debugger
      return action.creators
    default:
      return state
  }
}

export default CreatorsReducer
