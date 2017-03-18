import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import appReducer from '../containers/App/ducks';

const reducers = combineReducers({
	App: appReducer,
	routing: routerReducer
})

export default reducers;