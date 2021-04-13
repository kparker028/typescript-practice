import React from "react";
import type { FormEvent } from "react";

const sendForm = async (event: FormEvent<HTMLFormElement>) => {
	event.preventDefault();
	const { name, password } = event.target as typeof event.target & {
		name: { value: string };
		password: { value: string };
	};
	console.log(name.value, password.value);
	/*	await fetch("/route", {
		headers: {
			"Content-Type": "application/json",
		},
		method: "POST",
		body: JSON.stringify({
			name: name.value,
			password: password.value,
		}),
	}); */
};

export const Main = () => {
	return (
		<form
			className='wrap'
			onSubmit={(evt) => {
				sendForm(evt);
			}}
		>
			<fieldset>
				<label>Name: </label>
				<input type='text' id='name' />
			</fieldset>
			<fieldset>
				<label>Name: </label>
				<input type='password' id='password' />
			</fieldset>
			<button className='submit-btn' type='submit'>
				Login
			</button>
		</form>
	);
};
