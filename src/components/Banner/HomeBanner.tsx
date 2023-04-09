/*
 * File: HomeBanner.tsx
 * File Created: Sunday, 9th April 2023 1:32:47 pm
 * Author: Marek Fischer
 * -----
 * Last Modified: Sunday, 9th April 2023 1:55:14 pm
 * Modified By: Marek Fischer 
 * -----
 * Copyright - 2023 Deep Vertic
 */
import React from 'react'
import styled from 'styled-components';
import backgroundSolider from '../../assets/SoldierBackground.png';
import ScrollToContent from './ScrollToContent';

const Container = styled.div`
	height: 90vh;
	position: relative;
`;

const BackgroundSoldier = styled.img`
	max-width: 25vw;
 	position: absolute;
	bottom: 0;
	left: 0;
	@media (max-width: 768px) {
		display: none;
	}
`;

const Slogan = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const StyledScrollToContent = styled(ScrollToContent)`
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, 0);
`;

type Props = {}

const HomeBanner = (props: Props) => {
	const contentRef = React.useRef<HTMLDivElement>(null);

	return (
		<Container ref={contentRef} >
			<BackgroundSoldier src={backgroundSolider} />
			<Slogan>
				<h1>Where technology meets imagination.</h1>
				<h2>Scroll down to unlock a world of digital adventure.</h2>
			</Slogan>
			<StyledScrollToContent containerRef={contentRef} />
		</Container>
	)
}

export default HomeBanner