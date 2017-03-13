import { CALL_API  } from 'middleware/api'

export const SIGN_UP_SUCCESS = Symbol('SIGN_UP_SUCCESS')
export const SIGN_UP_ERROR = Symbol('SIGN_UP_ERROR')

export function signUp(username, password) {
  return {
    [CALL_API]: {
      method: 'post',
      path: '/api/users',
      body: {
        user: {
          username: username,
          password: password
        }
      },
      successType: SIGN_UP_SUCCESS,
      errorType: SIGN_UP_ERROR
    }
  }
}
