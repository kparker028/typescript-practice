import React, { useState, useRef, useEffect } from "react";

const users = [
	{ name: "Sarah", age: 20 },
	{ name: "James", age: 20 },
	{ name: "Tori", age: 20 },
];

export const Ref: React.FC = () => {
	const inputRef = useRef<HTMLInputElement | null>(null);
	const [name, setName] = useState("");
	const [user, setUser] = useState<{ name: string; age: number | undefined }>();

	useEffect(() => {
		if (!inputRef.current) {
			return;
		}
		inputRef.current.focus();
	}, []);

	const onClick = () => {
		const foundUser = users.find((user) => {
			return user.name === name;
		});
		setUser(foundUser);
	};

	return (
		<div>
			<h1>user search</h1>
			<input
				ref={inputRef}
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={onClick}>Find User</button>
			{user && user.name}
			{user && user.age}
		</div>
	);
};
