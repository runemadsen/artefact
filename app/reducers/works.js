import Immutable from 'immutable'

import * as ActionType from '../actions/auth'

let defaultState = Immutable.fromJS({
  loggedIn: false
})

function workReducer(state = defaultState, action) {
  switch(action.type) {

    case ActionType.UPDATE:
      return state.setIn(['works', action.id],action.data)
      break
    default:
      return state
  }
}

export default workReducer
