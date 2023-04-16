/*
 * File: Games.tsx
 * File Created: Friday, 14th April 2023 10:03:31 pm
 * Author: Marek Fischer
 * -----
 * Last Modified: Sunday, 16th April 2023 8:32:07 pm
 * Modified By: Marek Fischer 
 * -----
 * Copyright - 2023 Deep Vertic
 */
import React from 'react'
import ComingSoon from '../../../components/ComingSoon'
import styled from 'styled-components';
import List from './List';

const Container = styled.div`
	height: 100%;
	padding: 2rem;
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