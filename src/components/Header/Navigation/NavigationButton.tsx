import React, { Ref, forwardRef } from 'react'
import styled from 'styled-components';
import { materialTheme } from '../../../theme/material3';

const NavButton = styled.button<{open : boolean}>`
	display: none;
	width: 48px;
	height: 48px;
	padding: 0;
	align-self: center;
	background-color: transparent;
	border: none;
	border-radius: ${materialTheme.shape.corner.full};
	font-size: 24px;
	color: ${materialTheme.colors.onSurface};
	transition: all ${materialTheme.motion.duration.short2} ${materialTheme.motion.easing.standard};
	cursor: pointer;
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

	&:active::before {
		opacity: 0.12;
	}

	@media (max-width: 768px) {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	${({open}) => open && ({ 
		transform: `rotate(90deg)`,
		backgroundColor: materialTheme.colors.secondaryContainer,
		color: materialTheme.colors.onSecondaryContainer,
	})}

	${({open}) => open && `
		&::before {
			background-color: ${materialTheme.colors.onSecondaryContainer};
		}
	`}
`;

type Props = {
	open: boolean,
	toggleOpen: () => void,
}

const NavigationButton = forwardRef((props: Props, ref: Ref<HTMLButtonElement>) => {
  return (
	<NavButton
		onClick={props.toggleOpen}
		ref={ref} open={props.open}
	>
		<i className="ri-menu-line" />
	</NavButton>
  )
})

export default NavigationButton