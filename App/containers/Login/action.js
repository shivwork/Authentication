export function registerUser(user) {    // Register
  return {
    type: 'REGISTER_USER',
    data: user
  }
}

export function loginSuccess(user) {    // Login 
  return {
    type: 'SUCCESS_LOGIN',
    data: user
  }
}

export function logoutSuccess(user) {     // Logout
  return {
    type: 'SUCCESS_LOGOUT',
    data: user
  }
}
