const CHANGE_NAME = 'react-boilerplate/App/CHANGE_NAME';

export default function appReducer(state = { name: 'Chris' }, action = {}) {
	switch (action.type) {
		case CHANGE_NAME:
			return {...state, name: action.payload}
		default:
			return state;
	}
}

export function changeName(value) {
	return {
		type: CHANGE_NAME,
		payload: value
	};
}
