import React from 'react'
import styled from 'styled-components';
import Navigation from './Navigation/Navigation';
import HeaderTitle from './HeaderTitle';
import { materialTheme } from '../../theme/material3';

export const headerHeight = '64px'; // Material Design 3 standard app bar height

const Container = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	position: relative;
	width: 100%;
	height: ${headerHeight};
	background-color: ${materialTheme.colors.surface};
	color: ${materialTheme.colors.onSurface};
	box-shadow: ${materialTheme.elevation.level2};
	z-index: 99;
	padding: 8px 16px;
	transition: box-shadow ${materialTheme.motion.duration.short4} ${materialTheme.motion.easing.standard};
	
	&:hover {
		box-shadow: ${materialTheme.elevation.level3};
	}
`;

type Props = {}

const Header = (props: Props) => {
	return (
		<Container>
			<HeaderTitle />
			<Navigation />
		</Container>
	)
}

export default Header