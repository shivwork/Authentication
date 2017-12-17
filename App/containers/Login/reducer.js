const getInitialState = () =>{
  return {
    users: []
  }
};

export function userReducer(state = getInitialState(), action) {
  switch (action.type){

    case 'REGISTER_USER':
      return Object.assign({}, state, {
        users: [...state.users, action.data]
      });
      
   

    case 'SUCCESS_LOGIN':
      return Object.assign({}, state, {
        activeUser: action.data
      });

    case 'persist/REHYDRATE':
      return state;

    case 'SUCCESS_LOGOUT':
      return Object.assign({}, state, {
        activeUser: []
      });

    default:
      return state;
  }
}