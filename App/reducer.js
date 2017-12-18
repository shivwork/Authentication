import { combineReducers } from 'redux';
import { planetReducer } from './containers/Planet/reducer';
import { userReducer } from './containers/Login/reducer';

const allReducers = combineReducers({
    planetReducer,
    userReducer
});

export default allReducers;