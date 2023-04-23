/*
 * File: Apps.tsx
 * File Created: Sunday, 9th April 2023 9:35:06 am
 * Author: Marek Fischer
 * -----
 * Last Modified: Sunday, 23rd April 2023 1:41:09 pm
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

const Apps = (props: Props) => {
	return (
		<Container>
			<Title>Apps</Title>
			<p>
				Here you can find a list of all the apps I have created.
			</p>
			<List />
		</Container>
	)
}

export default Apps