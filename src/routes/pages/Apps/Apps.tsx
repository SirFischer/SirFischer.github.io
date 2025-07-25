/*
 * File: Apps.tsx
 * File Created: Sunday, 9th April 2023 9:35:06 am
 * Author: Marek Fischer
 * -----
 * Last Modified: Friday, 25th July 2025
 * Modified By: Marek Fischer 
 * -----
 * Copyright - 2023 Deep Vertic
 */
import React from 'react'
import styled from 'styled-components';
import List from './List';
import { materialTheme } from '../../../theme/material3';

const Container = styled.div`
	min-height: calc(100vh - 64px);
	padding: 24px;
	max-width: 1200px;
	margin: 0 auto;
	background-color: ${materialTheme.colors.background};
`;

const Title = styled.h1`
	font-family: ${materialTheme.typography.displaySmall.fontFamily};
	font-size: ${materialTheme.typography.displaySmall.fontSize};
	line-height: ${materialTheme.typography.displaySmall.lineHeight};
	font-weight: ${materialTheme.typography.displaySmall.fontWeight};
	letter-spacing: ${materialTheme.typography.displaySmall.letterSpacing};
	color: ${materialTheme.colors.onBackground};
	margin: 0 0 16px 0;
`;

const Description = styled.p`
	font-family: ${materialTheme.typography.bodyLarge.fontFamily};
	font-size: ${materialTheme.typography.bodyLarge.fontSize};
	line-height: ${materialTheme.typography.bodyLarge.lineHeight};
	font-weight: ${materialTheme.typography.bodyLarge.fontWeight};
	letter-spacing: ${materialTheme.typography.bodyLarge.letterSpacing};
	color: ${materialTheme.colors.onSurfaceVariant};
	margin: 0 0 32px 0;
`;

type Props = {}

const Apps = (props: Props) => {
	return (
		<Container>
			<Title>Apps</Title>
			<Description>
				Here you can find a list of all the apps I have created.
			</Description>
			<List />
		</Container>
	)
}

export default Apps