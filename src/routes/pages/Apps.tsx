/*
 * File: Apps.tsx
 * File Created: Sunday, 9th April 2023 9:35:06 am
 * Author: Marek Fischer
 * -----
 * Last Modified: Sunday, 9th April 2023 9:37:53 am
 * Modified By: Marek Fischer 
 * -----
 * Copyright - 2023 Deep Vertic
 */
import React from 'react'
import ComingSoon from '../../components/ComingSoon'
import styled from 'styled-components';

const Container = styled.div`
	height: 100%;
`;

type Props = {}

const Apps = (props: Props) => {
	return (
		<Container>
			<ComingSoon />
		</Container>
	)
}

export default Apps