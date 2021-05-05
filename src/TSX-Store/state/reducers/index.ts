import { combineReducers } from "redux";
import { repositoriesReducer } from "./repositoryreducer";

export const reducers = combineReducers({
	repositories: repositoriesReducer,
});
