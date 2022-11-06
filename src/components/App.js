import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../actions";

const App = (props) => {
	return (
		<div>
			<button onClick={props.increment}>Increment</button>
			<button onClick={props.reset}>RESET</button>
			<button onClick={props.decrement}>Decrement</button>
			<p>
				Current Count: <strong>{props.count}</strong>
			</p>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { count: state.count };
};

export default connect(mapStateToProps, { increment, decrement, reset })(App);
