import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {  BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
//  Reducrs
import allReducer from './reducer';

//  Components
import Login from './containers/Login';
import Planet from './containers/Planet/index.js';
import Header from './components/header';

const store = createStore(
    allReducer,
    compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

ReactDOM.render(
    <Provider store={store}>
            <Router>
                 <Switch>
                    <Route exact path="/planets" component={Planet} />
                    <Route path="/" component={Login} />
                    <Route render={ () => (
            <div>Not Found 404</div>
          )}/>
            </Switch>
            </Router>
    </Provider>,
    document.getElementById('root'));