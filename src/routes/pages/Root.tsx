import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../../components/Footer';
import Header from '../../components/Header/Header';
import ScrollToTop from '../../components/ScrollToTop';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`;

const Content = styled.div`
	flex: 1;
`;

type Props = {}

const Root = (props: Props) => {
  return (
	<Container>
		<Header />
		<Content>
			<Outlet />
		</Content>
		<Footer />
		<ScrollToTop />
	</Container>
  )
}

export default Root