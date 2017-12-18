import { put, call, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

export function fetchPlanetResult(userId) {
  return axios.get('https://swapi.co/api/planets');
};

export function*  fetchPlanet(userId) {       // Get all planet
   const planetData = yield call(fetchPlanetResult, userId);
   yield put({type:'GET_PLANETS_SUCCESS', data:planetData.data.results});
}

export function* planetSaga() {
  yield takeLatest("GET_PLANETS_REQUEST", fetchPlanet);
}