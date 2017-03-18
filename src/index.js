import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import configureStore from './redux/store';

import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import App from './containers/App';
import { Foo } from './components/Foo';
import { Bar } from './components/Bar';

const store = configureStore();

const history = createHistory();

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route exact path="/" component={App}/>
            <Route path="/foo" component={Foo}/>
            <Route path="/bar" component={Bar}/>
          </div>
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

render();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render();
  });
}