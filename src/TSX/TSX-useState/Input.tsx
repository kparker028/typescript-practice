import React, { useState } from "react";

const users = [
	{ name: "Sarah", age: 20 },
	{ name: "James", age: 20 },
	{ name: "Tori", age: 20 },
];

export const Search: React.FC = () => {
	const [name, setName] = useState("");
	const [user, setUser] = useState<{ name: string; age: number | undefined }>();

	const onClick = () => {
		const foundUser = users.find((user) => {
			return user.name === name;
		});
		setUser(foundUser);
	};

	return (
		<div>
			<h1>user search</h1>
			<input value={name} onChange={(e) => setName(e.target.value)} />
			<button onClick={onClick}>Find User</button>
			{user && user.name}
			{user && user.age}
		</div>
	);
};
