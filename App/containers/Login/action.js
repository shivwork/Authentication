export function getUsers(users) {
  return {
    type: 'SUCCESS_USERS',
    data: users
  }
}

export function loginSuccess(user) {
  return {
    type: 'SUCCESS_LOGIN',
    data: user
  }
}

export function logoutSuccess(user) {
  return {
    type: 'SUCCESS_LOGOUT',
    data: user
  }
}
