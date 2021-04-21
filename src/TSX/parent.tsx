import React from "react";
import { ChildFC } from "./TSX-useState/child";

export const Parent = () => {
	return (
		<ChildFC color='red' onClick={() => console.log("clicked")}>
			hello
		</ChildFC>
	);
};
