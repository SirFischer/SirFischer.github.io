import React, { useState } from 'react'
import NavigationLink from './NavigationLink'
import styled from 'styled-components';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';
import NavigationButton from './NavigationButton';

const Nav = styled.nav`
	display: flex;
	padding: 0 2rem;
	position: relative;
`;


const Content = styled.div<{ open: boolean}>`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;

	@media (max-width: 768px) {
		z-index: 1;
		position: absolute;
		top: 100%;
		right: 0;
		flex-direction: column;
		align-items: flex-start;
		display: ${({ open }) => open ? 'flex' : 'none'};
		width: 100vw;
		padding: 1rem;
		background-color: #fff;
		border: 1px solid #ccc;
		animation: slideIn 0.3s ease-in-out;
		animation-direction: ${({ open }) => open ? 'normal' : 'reverse'};
	}

	@keyframes slideIn {
		from {
			transform: translateX(100%);
		}
		to {
			transform: translateX(0);
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
					to="/contact"
				> Contact </NavigationLink>
			</Content>
		</Nav>
	)
}

export default Navigation