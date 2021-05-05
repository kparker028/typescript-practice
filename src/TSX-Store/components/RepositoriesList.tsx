import React, { useState, FC } from "react";
import { useActions } from "../hooks/useActions";

export const RepositoriesList: FC = () => {
	const [term, setTerm] = useState("");
	const { searchRepositories } = useActions();

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		searchRepositories(term);
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input value={term} onChange={(e) => setTerm(e.target.value)} />
				<button>Search</button>
			</form>
		</div>
	);
};
