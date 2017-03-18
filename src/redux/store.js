import {createStore, compose, applyMiddleware} from 'redux';
import { routerMiddleware } from 'react-router-redux'

import reducers from './reducers';

export default function configureStore(initialState = {}) {
	const middleware = routerMiddleware(history)

	const store = createStore(
		reducers,
		initialState,
		compose(
      		window.devToolsExtension ? window.devToolsExtension() : f => f
    	),
    	applyMiddleware(middleware)
	)

	return store;
}