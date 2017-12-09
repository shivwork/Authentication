const getInitialState = () =>{
  return {
    planets: []
  }
};

export function planetReducer(state = getInitialState(), action) {
  switch (action.type){

    case 'GET_PLANETS_SUCCESS':
      return Object.assign({}, state, {
        allPlanets: action.data,
        planets: action.data
      });

    case 'FILTER_PLANETS_SUCCESS':
      return Object.assign({}, state, {
        planets: action.data
      });

    case 'PLANET_DETAILS_SUCCESS':
      return Object.assign({}, state, {
        planetDetails: action.data
      });

    default:
      return state;
  }
}