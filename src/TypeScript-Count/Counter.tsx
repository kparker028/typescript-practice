import React from "react";
import type { Dispatch } from "./Context";

export const Counter = ({ handler }: { handler: Dispatch }) => {
	return (
		<div>
			<button
				className='increment'
				onClick={() => {
					handler("increment");
				}}
			>
				add
			</button>
			<button
				className='decrement'
				onClick={() => {
					handler("decrement");
				}}
			>
				subtract
			</button>
		</div>
	);
};
