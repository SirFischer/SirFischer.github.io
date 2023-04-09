import React from 'react'
import styled from 'styled-components';
import Navigation from './Navigation/Navigation';
import HeaderTitle from './HeaderTitle';

const Container = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	position: relative;
	height: 50px;
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