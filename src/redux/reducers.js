import { combineReducers } from 'redux';

import appReducer from '../containers/App/ducks';

const reducers = combineReducers({
	App: appReducer
})

export default reducers;