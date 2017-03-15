import { CALL_API  } from '../middleware/api'

export const SIGN_UP_SUCCESS = Symbol('SIGN_UP_SUCCESS')
export const SIGN_UP_ERROR = Symbol('SIGN_UP_ERROR')
export const SIGN_IN_SUCCESS = Symbol('SIGN_IN_SUCCESS')
export const SIGN_IN_ERROR = Symbol('SIGN_IN_ERROR')
export const SIGN_OUT_SUCCESS = Symbol('SIGN_OUT_SUCCESS')
export const SIGN_OUT_ERROR = Symbol('SIGN_OUT_ERROR')

export function signUp(username, password, email) {
  return {
    [CALL_API]: {
      method: 'post',
      path: '/api/users',
      body: {
        user: {
          username: username,
          password: password,
          email: email
        }
      },
      successType: SIGN_UP_SUCCESS,
      errorType: SIGN_UP_ERROR
    }
  }
}

export function signIn(username, password) {
  return {
    [CALL_API]: {
      method: 'post',
      path: '/api/users/login',
      body: {
        username: username,
        password: password
      },
      successType: SIGN_IN_SUCCESS,
      errorType: SIGN_IN_ERROR
    }
  }
}

export function signOut() {
  return {
    [CALL_API]: {
      method: 'post',
      path: '/api/users/logout',
      successType: SIGN_OUT_SUCCESS,
      errorType: SIGN_OUT_ERROR
    }
  }
}
