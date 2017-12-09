import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import { planetReducer } from './containers/Planet/reducer';
import { userReducer } from './containers/Login/reducer';

const allReducers = combineReducers({
    planetReducer,
    userReducer,
    form: formReducer,
});

export default allReducers;