import React from "react";
import { Provider } from "react-redux";
import { store } from "../state";
import { RepositoriesList } from "./RepositoriesList";

export const Tapp = () => {
	return (
		<Provider store={store}>
			<div>
				<h1>Search fro a package</h1>
				<RepositoriesList />
			</div>
		</Provider>
	);
};