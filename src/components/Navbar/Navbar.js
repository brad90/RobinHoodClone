import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<Nav>
			<div>
				<Link to='/'>
					<h1> RobinHood </h1>
				</Link>
				<Link to='/Login'>
					<Button variant='contained' style={{ ...styles.button }}>
						Sign Up
					</Button>
				</Link>
			</div>
		</Nav>
	);
}

const styles = {
	button: {
		background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
		borderRadius: 50,
		border: 0,
		color: "white",
		height: 40,
		padding: "0 30px",
		boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
	},
	buttonBlue: {
		background: "linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)",
		boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .30)",
	},
};

const Nav = styled.div`
	width: 1200px;
	margin: auto;
	top: 0;
	div {
		padding: 0 50px;
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: space-between;
		height: 50px;
		h1 {
			color: white;
			text-align: left;
		}
	}
`;

const NavMenu = styled.ul`
	list-style: none;
	display: flex;
	li {
		cursor: pointer;
		color: white;
		padding: 0 30px;
		font-weight: 600;
	}
`;
