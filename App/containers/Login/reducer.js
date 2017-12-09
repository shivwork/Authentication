const getInitialState = () =>{
  return {
    users: []
  }
};

export function userReducer(state = getInitialState(), action) {
  switch (action.type){

    case 'SUCCESS_USERS':
      return Object.assign({}, state, {
        users: action.data
      });

    case 'SUCCESS_LOGIN':
      return Object.assign({}, state, {
        activeUser: action.data
      });

    case 'SUCCESS_LOGOUT':
      return Object.assign({}, state, {
        activeUser: []
      });

    default:
      return state;
  }
}