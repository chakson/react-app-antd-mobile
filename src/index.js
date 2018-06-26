import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { init } from "@rematch/core";
import * as models from './models/index';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './containers/App';

const store = init({
  models,
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
