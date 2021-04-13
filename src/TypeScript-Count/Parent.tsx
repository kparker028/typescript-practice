import React from "react";
import { Main } from "./Main";
import { CounterProvider } from "./Context";

export const Parent = () => {
	return (
		<CounterProvider>
			<Main />
		</CounterProvider>
	);
};
