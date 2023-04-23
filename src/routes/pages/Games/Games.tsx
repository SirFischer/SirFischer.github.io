/*
 * File: Games.tsx
 * File Created: Friday, 14th April 2023 10:03:31 pm
 * Author: Marek Fischer
 * -----
 * Last Modified: Sunday, 23rd April 2023 2:31:53 pm
 * Modified By: Marek Fischer 
 * -----
 * Copyright - 2023 Deep Vertic
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

const Games = (props: Props) => {
	return (
		<Container>
			<Title>Games</Title>
			<p>
				Here you can find a list of all the games I have created.
			</p>
			<List />
		</Container>
	)
}

export default Games