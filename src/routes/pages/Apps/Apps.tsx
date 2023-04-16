/*
 * File: Apps.tsx
 * File Created: Sunday, 9th April 2023 9:35:06 am
 * Author: Marek Fischer
 * -----
 * Last Modified: Friday, 14th April 2023 11:32:43 pm
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