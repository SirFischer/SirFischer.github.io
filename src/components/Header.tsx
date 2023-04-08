import React from 'react'
import styled from 'styled-components';
import Navigation from './Navigation';

const Container = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

type Props = {}

const Header = (props: Props) => {
	return (
		<Container>
			Deepvertic
			<Navigation />
		</Container>
	)
}

export default Header