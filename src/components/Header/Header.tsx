import React from 'react'
import styled from 'styled-components';
import Navigation from './Navigation/Navigation';
import HeaderTitle from './HeaderTitle';

export const headerHeight = '100px';

const Container = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	position: relative;
	height: ${headerHeight};
	box-shadow: 0 6px 5px rgba(0, 0, 0, 0.3);
	z-index: 2;
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