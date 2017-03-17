import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import configureStore from './redux/store';

import { AppContainer } from 'react-hot-loader';
// AppContainer is a necessary wrapper component for HMR

import App from './containers/App';
import { changeName } from './containers/App/ducks'

const store = configureStore();

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component 
      	name={store.getState().App.name}
        {...bindActionCreators({changeName}, store.dispatch)}
  		/>
    </AppContainer>,
    document.getElementById('root')
  );
};

const renderApp = () => {
  render(App);
}

renderApp();

store.subscribe(renderApp);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(App)
  });
}