import React from "react";
import type { State } from "./Context";
export const Display = ({ count }: State) => {
	return <div>{count} </div>;
};
