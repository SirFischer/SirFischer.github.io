import React from 'react'
import styled from 'styled-components';
import HomeBanner from '../../components/Banner/HomeBanner';
import AboutSection from '../../components/AboutSection';
import { materialTheme } from '../../theme/material3';

const Container = styled.div`
  min-height: 100vh;
  background-color: ${materialTheme.colors.background};
`;

const ContentSection = styled.div`
	min-height: 100vh;
	background-color: ${materialTheme.colors.background};
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 24px;
`;

type Props = {}

const Home = (props: Props) => {
  return (
    <Container>
		<HomeBanner />
		<ContentSection>
			<AboutSection />
		</ContentSection>
    </Container>
  )
}

export default Home