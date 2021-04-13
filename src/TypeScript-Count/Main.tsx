import React from "react";
import { Counter } from "./Counter";
import { Display } from "./Display";
import { useCounter } from "./Context";

export const Main = () => {
	const { state, dispatch } = useCounter();
	return (
		<>
			<Display {...state} />
			<Counter handler={dispatch} />
		</>
	);
};
