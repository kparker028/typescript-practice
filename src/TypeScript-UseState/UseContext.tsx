import React, { useState, useContext } from "react";
import UserContext, { UserState } from "./Context";

const Consumer = () => {
	const user = useContext(UserContext);

	return (
		<div>
			<div>First: {user.first}</div>
			<div>Last: {user.last}</div>
		</div>
	);
};

export const UseContext = () => {
	const [user, setUser] = useState<UserState>({
		first: "jane",
		last: "smith",
	});
	return (
		<UserContext.Provider value={user}>
			<Consumer />
			<button
				onClick={() => setUser({ first: "josie", last: "smith" })}
			></button>
		</UserContext.Provider>
	);
};
