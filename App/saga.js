import { put, call, takeLatest, fork} from 'redux-saga/effects';
import { planetSaga } from './containers/Planet/saga';


export default function*  rootSaga() {
    yield  [
        fork(planetSaga)
    ]
}