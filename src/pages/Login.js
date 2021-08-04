import React, { useState } from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import Button from "@material-ui/core/Button";

const FromValidators = require("../common/validate");
const validateSignUpFrom = FromValidators.validateSignUpForm;

export default function Login() {
	const [email, setEmail] = useState(null);
	const [name, setName] = useState(null);

	const validateForm = (event) => {
		event.preventDefault();
		let usr = { email: email, name: name };
		let payload = validateSignUpFrom(usr);
		if (payload.success) {
			submitSignUp(usr);
		} else {
			console.log(payload.errors);
		}
	};

	const submitSignUp = (usr) => {
		console.log("I will be saving something");
	};

	return (
		<LoginContainer>
			<form onSubmit={validateForm}></form>
			<div>
				<LoginSignUp>
					<input placeholder='Email' type='text' onChange={(e) => setName(e.value)} required />
				</LoginSignUp>
				<br />
				<LoginSignUp>
					<input placeholder='Password' type='text' onChange={(e) => setEmail(e.value)} required />
				</LoginSignUp>
				<br />
				<LoginButtons>
					<Button variant='contained' color='primary' onClick={(event) => validateForm(event)}>
						Sign Up
					</Button>
				</LoginButtons>

				<h4>Or Login</h4>
				<LoginButtons>
					<Button variant='contained' color='primary'>
						Login with Google
					</Button>
					<Button variant='contained' color='primary' startIcon={<FacebookIcon />}>
						{" "}
						Login with Google
					</Button>
				</LoginButtons>
			</div>
		</LoginContainer>
	);
}

const LoginContainer = styled.div`
	display: flex;
	height: 100vh;
	align-items: center;
	text-align: center;
	background-color: lightcoral;
	margin-top: -50px;
	div {
		margin: auto;
	}
	h2,
	h4 {
		color: white;
	}
`;

const LoginSignUp = styled.div`
	background-color: white;
	border-radius: 50px;
	height: 60px;
	width: 360px;
	padding: 0 20px;
	align-items: center;
	display: flex;
	input {
		height: 50px;
		width: 360px;
		border: none;
		outline: none;
	}
`;

const LoginButtons = styled.div`
	width: 400px;
	button {
		margin-bottom: 20px;
		width: 400px;
		height: 50px;
	}
`;
