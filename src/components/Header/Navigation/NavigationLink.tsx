/*
 * File: NavigationLink.tsx
 * File Created: Sunday, 9th April 2023 9:20:24 am
 * Author: Marek Fischer
 * -----
 * Last Modified: Friday, 25th July 2025
 * Modified By: Marek Fischer 
 * -----
 * Copyright - 2023 Deep Vertic
 */
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { materialTheme } from '../../../theme/material3'

const StyledNavLink = styled(NavLink)`
	color: ${materialTheme.colors.onSurface};
  	text-decoration: none;
	height: fit-content;
	padding: 8px 12px;
	border-radius: ${materialTheme.shape.corner.small};
	font-size: ${materialTheme.typography.labelLarge.fontSize};
	font-weight: ${materialTheme.typography.labelLarge.fontWeight};
	line-height: ${materialTheme.typography.labelLarge.lineHeight};
	letter-spacing: ${materialTheme.typography.labelLarge.letterSpacing};
	display: flex;
	align-items: center;
	gap: 8px;
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

  	&:hover {
		&::before {
			opacity: 0.08;
		}
 	}

	&:focus-visible {
		outline: 2px solid ${materialTheme.colors.primary};
		outline-offset: 2px;
	}

  	&.active {
		background-color: ${materialTheme.colors.secondaryContainer};
		color: ${materialTheme.colors.onSecondaryContainer};

		&::before {
			background-color: ${materialTheme.colors.onSecondaryContainer};
		}
	}
	
	@media (max-width: 768px) {
		width: 100%;
		padding: 12px 16px;
		border-radius: ${materialTheme.shape.corner.medium};
	}
`

type Props = {
	to: string,
	children: React.ReactNode
}

const NavigationLink = (props: Props) => {
	return (
		<StyledNavLink
			to={props.to}
		>
			{props.children}
		</StyledNavLink>
	)
}

export default NavigationLink