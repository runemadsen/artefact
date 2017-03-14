import Immutable from 'immutable'

import * as ActionType from '../actions/questions'

let defaultState = Immutable.fromJS([])
function questionsReducer (state = defaultState, action) {
  switch(action.type) {
    case ActionType.LOADED_QUESTIONS:
      return Immutable.fromJS(action.response)
      break
    default:
      return state
  }
}

export default questionsReducer
