import { put, call, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

export function fetchPlanet(userId) {       // Get all planet
    return axios({
      url: `https://swapi.co/api/planets`
    }, {mode: 'cors'}).then((res) =>{
      return res.data.results;
    })
}

export function* planetSaga() {
    const planets = yield takeLatest("GET_PLANETS_REQUEST", fetchPlanet);
    yield put({type:'GET_PLANETS_SUCCESS', data: planets});
}