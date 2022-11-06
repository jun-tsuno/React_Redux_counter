import { combineReducers } from "redux";

const countReducers = (count = 0, action) => {
	if (action.type === "INCREMENT") {
		return ++count;
	} else if (action.type === "DECREMENT") {
		return --count;
	} else if (action.type === "RESET") {
		return 0;
	}

	return count;
};

export default combineReducers({
	count: countReducers,
});
