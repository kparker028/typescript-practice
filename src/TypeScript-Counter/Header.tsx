import React, { useState } from "react";

interface HeaderProps {
	buttonText?: string;
}

interface Movie {
	title: string;
	date: string;
	rating: string;
	description: string;
}

export const Header = ({ buttonText }: HeaderProps) => {
	const [count, setCount] = useState(0);
	const [movie, setMovie] = useState<Movie | null>(null);

	const increment = () => {
		setCount(count + 1);
	};
	const decrement = () => {
		setCount(count - 1);
	};

	return (
		<div>
			<h1>Header</h1>
			<button onClick={increment}>{buttonText || "click the button"}</button>
			<p>{count}</p>
			<button onClick={decrement}>{buttonText || "reduce it"}</button>
		</div>
	);
};
