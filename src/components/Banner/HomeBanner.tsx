/*
 * File: HomeBanner.tsx
 * File Created: Sunday, 9th April 2023 1:32:47 pm
 * Author: Marek Fischer
 * -----
 * Last Modified: Wednesday, 12th April 2023 7:25:02 am
 * Modified By: Marek Fischer 
 * -----
 * Copyright - 2023 Deep Vertic
 */
import React from 'react'
import styled from 'styled-components';
import idleSoldier from '../../assets/Soldier_idle.gif';
import ScrollToContent from './ScrollToContent';
import { headerHeight } from '../Header/Header';

const Container = styled.div`
	height: calc(100vh - ${headerHeight});
`;

const BackgroundSoldier = styled.img`
	height: 300px;
	max-height: 40%;
	aspect-ratio: 1/1;
	image-rendering: pixelated;
 	position: absolute;
	bottom: 3rem;
	left: 3rem;
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
			<BackgroundSoldier src={idleSoldier} />
			<Slogan>
				<h1>Where technology meets imagination.</h1>
				<h2>Scroll down to unlock a world of digital adventure.</h2>
			</Slogan>
			<StyledScrollToContent containerRef={contentRef} />
		</Container>
	)
}

export default HomeBanner