import React, { useState } from 'react'
import NavigationLink from './NavigationLink'
import styled from 'styled-components';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';
import NavigationButton from './NavigationButton';
import { materialTheme } from '../../../theme/material3';

const Nav = styled.nav`
	display: flex;
	padding: 0;
	position: relative;
`;

const Content = styled.div<{ open: boolean}>`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	gap: 8px;

	@media (max-width: 768px) {
		z-index: 1000;
		position: absolute;
		top: calc(100% + 8px);
		right: 0;
		flex-direction: column;
		align-items: flex-start;
		display: ${({ open }) => open ? 'flex' : 'none'};
		min-width: 200px;
		padding: 8px;
		background-color: ${materialTheme.colors.surfaceContainer};
		border-radius: ${materialTheme.shape.corner.medium};
		box-shadow: ${materialTheme.elevation.level3};
		animation: slideIn ${materialTheme.motion.duration.medium2} ${materialTheme.motion.easing.emphasizedDecelerate};
		animation-direction: ${({ open }) => open ? 'normal' : 'reverse'};
	}

	@keyframes slideIn {
		from {
			opacity: 0;
			transform: translateY(-8px) scale(0.95);
		}
		to {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}
`;

type Props = {}

const Navigation = (props: Props) => {
	const [open, setOpen] = useState(false)
	const containerRef = React.useRef<HTMLDivElement>(null);
	const buttonRef = React.useRef<HTMLButtonElement>(null);

	const toggleOpen = () => {
		setOpen(old => !old);
	}

	useOnClickOutside([containerRef, buttonRef], (e : Event) => {
		if (!open) return ;
		setOpen(false);
	});

	return (
		<Nav>
			<NavigationButton
				open={open}
				toggleOpen={toggleOpen}
				ref={buttonRef}
			/>
			<Content open={open} ref={containerRef} >
				<NavigationLink
					to="/"
				>
					Home <i className="ri-home-4-fill" />
				</NavigationLink>
				<NavigationLink
					to="/apps"
				> Apps </NavigationLink>
				<NavigationLink
					to="/games"
				> Games </NavigationLink>
				<NavigationLink
					to="/tools"
				>
					Tools <i className="ri-tools-fill" />
				</NavigationLink>
				<NavigationLink
					to="/contact"
				> Contact </NavigationLink>
			</Content>
		</Nav>
	)
}

export default Navigation