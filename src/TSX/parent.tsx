import React from "react";
import { ChildFC } from "./child";

export const Parent = () => {
	return (
		<ChildFC color='red' onClick={() => console.log("clicked")}>
			hello
		</ChildFC>
	);
};
