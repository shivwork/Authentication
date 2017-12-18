const getInitialState = () =>{
  return {
    planets: [],
    fetchPlanetLoading: false
  }
};

export function planetReducer(state = getInitialState(), action) {
  switch (action.type){
    case 'GET_PLANETS_REQUEST':
      return Object.assign({}, state, {
        fetchPlanetLoading: true
      })

    case 'GET_PLANETS_SUCCESS':
      return Object.assign({}, state, {
        allPlanets: action.data,
        planets: action.data,
        fetchPlanetLoading: false
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