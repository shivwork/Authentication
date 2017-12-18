import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {  BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import  createSagaMiddleware  from 'redux-saga';
import { persistStore, autoRehydrate  } from 'redux-persist';

//  Reducrs
import allReducer from './reducer';

// Saga
import  saga  from './saga';

//  Components
import Login from './containers/Login';
import Planet from './containers/Planet/index.js';
import Header from './components/header';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    allReducer,
    compose(
        applyMiddleware(sagaMiddleware), autoRehydrate(),
        window.devToolsExtension ? window.devToolsExtension() : f => f,
    )
);

persistStore(store,{ whitelist: ['userReducer'] });
sagaMiddleware.run(saga);

ReactDOM.render(
    <Provider store={store}>
            <Router>
                 <Switch>
                    <Route exact path="/planets" component={Planet} />
                    <Route path="/" component={Login} />
                     <Route path="*" component={Login} />
            </Switch>
            </Router>
    </Provider>,
    document.getElementById('root'));