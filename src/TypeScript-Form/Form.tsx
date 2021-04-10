import React, { useState, FC } from "react";

type AppProps = {
	sendSearchQuery?(): void;
};

export const Form: FC<AppProps> = ({ sendSearchQuery = () => undefined }) => {
	const [searchValue, setSearchValue] = useState<string>();

	const onSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		const searchValue = event.target.value;
	};

	const search = () => {
		sendSearchQuery();
	};

	return (
		<div>
			<input
				value={searchValue}
				onChange={onSearchInput}
				name='search'
				type='text'
			/>
			<button onClick={search}>search</button>
		</div>
	);
};
