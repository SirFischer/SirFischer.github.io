/*
 * File: Tools.tsx
 * File Created: Friday, 25th July 2025
 * Author: Marek Fischer
 * -----
 * Copyright - 2025 Deep Vertic
 */
import React from 'react'
import styled from 'styled-components';
import List from './List';

const Container = styled.div`
	height: 100%;
	padding: 2rem;
	max-width: 1200px;
	margin: 0 auto;
`;

const Title = styled.h1`
	font-size: 2rem;
`;

type Props = {}

const Tools = (props: Props) => {
	return (
		<Container>
			<Title>Tools</Title>
			<p>
				Here you can find a list of all the tools I have created.
			</p>
			<List />
		</Container>
	)
}

export default Tools
