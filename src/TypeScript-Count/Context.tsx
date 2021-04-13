import type { ReactNode } from "react";
import { createContext, useReducer, useContext } from "react";

export type Action = "increment" | "decrement";
export type Dispatch = (action: Action) => void;
export type State = typeof defaultState;

const defaultState = { count: 0 };

const CounterContext = createContext<
	{ state: State; dispatch: Dispatch } | undefined
>(undefined);

function counterReducer(state: State, action: Action) {
	switch (action) {
		case "increment":
			return {
				count: state.count + 1,
			};
		case "decrement":
			return {
				count: state.count - 1,
			};
	}
}

export function CounterProvider({ children }: { children: ReactNode }) {
	const [state, dispatch] = useReducer(counterReducer, defaultState);
	return (
		<CounterContext.Provider value={{ state, dispatch }}>
			{children}
		</CounterContext.Provider>
	);
}

export function useCounter() {
	const context = useContext(CounterContext);
	if (!context)
		throw new Error("useCounter must be used inside a CounterProvider");
	return context;
}
