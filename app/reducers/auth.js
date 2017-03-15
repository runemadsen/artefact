import Immutable from 'immutable'

import * as ActionType from '../actions/auth'

let defaultState = Immutable.fromJS({
  loggedIn: false
})

function authReducer(state = defaultState, action) {
  switch(action.type) {

    case ActionType.SIGN_UP_SUCCESS:
      return state.merge({ loggedIn: true })
      break
    case ActionType.SIGN_UP_ERROR:
      console.log('ERROR SIGNING UP: WE NEED ERROR MESSAGING')
      return state
      break

    case ActionType.SIGN_IN_SUCCESS:
      return state.merge({ loggedIn: true })
      break
    case ActionType.SIGN_IN_ERROR:
      console.log('ERROR SIGNING IN: WE NEED ERROR MESSAGING')
      return state
      break

    case ActionType.SIGN_OUT_SUCCESS:
      return state.merge({ loggedIn: false })
      break
    case ActionType.SIGN_OUT_ERROR:
      console.log('ERROR SIGNING OUT: WE NEED ERROR MESSAGING')
      return state
      break

    default:
      return state
  }
}

export default authReducer
