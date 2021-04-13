import React from "react";
import { State } from "./State";
import { Effect } from "./Effect";
import { UseContext } from "./UseContext";

export const Main = () => {
	return (
		<div>
			<h1>use state</h1>
			<State />
			<h1>use effect</h1>
			<Effect />
			<h1>use context</h1>
			<UseContext />
		</div>
	);
};
