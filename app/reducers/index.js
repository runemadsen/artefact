import { combineReducers } from 'redux'
import questions from './questions'
import questionDetail from './questionDetail'
import auth from './auth'

const rootReducer = combineReducers({
  questions,
  questionDetail,
  auth
})

export default rootReducer
