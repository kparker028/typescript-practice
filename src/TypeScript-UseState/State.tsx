import React, { useState } from "react";

export const State = () => {
	const [array, setArray] = useState<number[]>([]);
	const [name, setName] = useState<string | null>(null);
	return (
		<div>
			<button onClick={() => setArray([...array, array.length + 1])}>
				add to array
			</button>
			{JSON.stringify(array)}
			<button onClick={() => setName("jack")}>set setname</button>
			{JSON.stringify(name)}
		</div>
	);
};
