import 'babel-polyfill';
import '!file?name=[name].[ext]!./manifest.json'; // eslint-disable-line import/extensions
import 'file?name=[name].[ext]!./.htaccess'; // eslint-disable-line import/extensions
import 'sanitize.css/sanitize.css';
import 'rxjs';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { useScroll } from 'react-router-scroll';
import { install } from 'offline-plugin/runtime';

import configureStore from './store';
import { selectLocationState } from 'containers/App/selectors';
import App from 'containers/App';
import createRoutes from './routes';

const initialState = {};
const store = configureStore(initialState, browserHistory);
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: selectLocationState(),
});
const rootRoute = {
  component: App,
  childRoutes: createRoutes(store),
};
const Root = () => (
  <Provider store={store}>
    <Router
      history={history}
      routes={rootRoute}
      render={applyRouterMiddleware(useScroll())}
    />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('app'));

install();
