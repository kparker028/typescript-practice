import React, { useState, useEffect } from "react";

export const Effect = () => {
	const [value, setValue] = useState(1);

	useEffect(() => {
		const timer = window.setInterval(() => {
			setValue((v) => v + 1);
		}, 1000);
		return () => window.clearInterval(timer);
	}, []);

	return <div>{value}</div>;
};
