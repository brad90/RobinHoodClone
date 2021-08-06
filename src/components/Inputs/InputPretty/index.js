import React, { useState } from "react";
import styled from "styled-components";

function Input({ height, width, placeholder, handleInput }) {
	const [search, setSearch] = useState(null);

	return (
		<InputContainer height={height} width={width} onClick={() => handleInput(search)}>
			<InputBox height={height} width={width} placeholder={placeholder} onChange={(event) => setSearch(event.target.value)} />
		</InputContainer>
	);
}

const InputContainer = styled.div`
	height: ${(props) => props.height}px;
	width: ${(props) => props.width}px;
	border-radius: 50px;
	background-color: white;
	padding: 5px 10px;
	display: flex;
	align-items: center;
	cursor: pointer;
`;

const InputBox = styled.input`
	height: ${(props) => props.height - 20}px;
	width: ${(props) => props.width - 30}px;
	border: none;
	border-radius: 50px;
	outline: none;
`;

export default Input;
