/*
 * File: HeaderTitle.tsx
 * File Created: Sunday, 9th April 2023 12:56:19 pm
 * Author: Marek Fischer
 * -----
 * Last Modified: Friday, 25th July 2025
 * Modified By: Marek Fischer 
 * -----
 * Copyright - 2023 Deep Vertic
 */
import React from 'react'
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { materialTheme } from '../../theme/material3';

const StyledLink = styled(Link)`
	height: 48px;
	display: flex;
	align-items: center;
	border-radius: ${materialTheme.shape.corner.small};
	transition: all ${materialTheme.motion.duration.short2} ${materialTheme.motion.easing.standard};
	position: relative;
	overflow: hidden;

	&::before {
		content: '';
		position: absolute;
		inset: 0;
		background-color: ${materialTheme.colors.onSurface};
		opacity: 0;
		transition: opacity ${materialTheme.motion.duration.short2} ${materialTheme.motion.easing.standard};
	}

	&:hover::before {
		opacity: 0.08;
	}

	&:focus-visible {
		outline: 2px solid ${materialTheme.colors.primary};
		outline-offset: 2px;
	}
`;

const Logo = styled.img`
	height: 100%;
	width: auto;
`;

type Props = {}

const HeaderTitle = (props: Props) => {
  return (
	<StyledLink to="/" >
		<Logo src={logo} alt="logo" />
	</StyledLink>
  )
}

export default HeaderTitle