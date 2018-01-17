import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import './static/common.less';
import LoginPage from './containers/LoginPage';
import HomePage from './containers/HomePage';
import registerServiceWorker from './registerServiceWorker';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  combineReducers({
    router: routerReducer,
  }),
  applyMiddleware(thunk, middleware),
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/homepage" component={HomePage} />
      </Switch>
    </ConnectedRouter>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
