import React from 'react'
import NavigationLink from './NavigationLink'
import styled from 'styled-components';

const Nav = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 0.5rem 2rem;
	gap: 1rem;
`;

type Props = {}

const Navigation = (props: Props) => {
  return (
	<Nav>
		<NavigationLink
			to="/"
		> Home </NavigationLink>
		<NavigationLink
			to="/apps"
		> Apps </NavigationLink>
		<NavigationLink
			to="/games"
		> Games </NavigationLink>
	</Nav>
  )
}

export default Navigation