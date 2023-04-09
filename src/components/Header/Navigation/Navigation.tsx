import React, { useState } from 'react'
import NavigationLink from './NavigationLink'
import styled from 'styled-components';

const Nav = styled.nav`
	display: flex;
	padding: 0 2rem;
	position: relative;
`;

const NavButton = styled.button`
	display: none;
	height: fit-content;
	padding: 0.5rem;
	align-self: center;
	@media (max-width: 768px) {
		display: block;
	}
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
	}
`;

type Props = {}

const Navigation = (props: Props) => {
	const [open, setOpen] = useState(false)

	const toggleOpen = () => {
		setOpen(!open)
	}

	return (
		<Nav>
			<NavButton onClick={toggleOpen}>
				<i className="ri-menu-line" />
			</NavButton>
			<Content open={open} >
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