import React from 'react'
import styled from 'styled-components';
import HomeBanner from '../../components/Banner/HomeBanner';
import ComingSoon from '../../components/ComingSoon';

const Container = styled.div`
  height: 100%;
`;

type Props = {}

const Home = (props: Props) => {
  return (
    <Container>
		<HomeBanner />
		<div style={{height: '120vh'}} >
			<ComingSoon />
		</div>
    </Container>
  )
}

export default Home