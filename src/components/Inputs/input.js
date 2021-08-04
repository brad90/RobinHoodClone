import React from "react";
import styled from "styled-components";

export default function input({ height, width, placeholder }) {
	return (
		<InputContainer height={height} width={width}>
			<Input height={height} width={width} placeholder={placeholder} />
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
`;

const Input = styled.input`
	height: ${(props) => props.height - 20}px;
	width: ${(props) => props.width - 30}px;
	border: none;
	border-radius: 50px;
	outline: none;
`;
