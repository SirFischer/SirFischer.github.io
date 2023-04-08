import React from 'react'
import ComingSoon from '../../components/ComingSoon'
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
`;

type Props = {}

const Home = (props: Props) => {
  return (
    <Container>
      <ComingSoon />
    </Container>
  )
}

export default Home