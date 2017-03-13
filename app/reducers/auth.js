import * as ActionType from 'actions/auth'
import Immutable from 'immutable'

let defaultState = Immutable.fromJS({})

function authReducer (state = defaultState, action) {
  switch(action.type) {
    case ActionType.SIGN_UP_SUCCESS:
      console.log('SIGN UP SUCCESS FROM REDUCER')
      return state
      break
    case ActionType.SIGN_UP_ERROR:
      console.log('SIGN UP ERROR FROM REDUCER')
      return state
      break
    default:
      return state
  }
}

export default authReducer
