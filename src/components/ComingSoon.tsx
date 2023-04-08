import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: center;
	align-items: center;
	background-color: #f5f5f5;
`;

const Title = styled.p`
	font-size: 2rem;
	font-weight: 600;
	color: #333;
`;

const Subtitle = styled.p`
	font-size: 1.2rem;
	font-weight: 400;
	color: #333;
`;

type Props = {}

const ComingSoon = (props: Props) => {
  return (
	<Container>
		<Title>
			Coming soon!
		</Title>
		<Subtitle>
			Site under construction.
		</Subtitle>
	</Container>
  )
}

export default ComingSoon