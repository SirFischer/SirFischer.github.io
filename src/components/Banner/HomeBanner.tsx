/*
 * File: HomeBanner.tsx
 * File Created: Sunday, 9th April 2023 1:32:47 pm
 * Author: Marek Fischer
 * -----
 * Last Modified: Friday, 25th July 2025
 * Modified By: Marek Fischer 
 * -----
 * Copyright - 2023 Deep Vertic
 */
import React from 'react'
import styled from 'styled-components';
import idleSoldier from '../../assets/Soldier_idle.gif';
import ScrollToContent from './ScrollToContent';
import { headerHeight } from '../Header/Header';
import { materialTheme } from '../../theme/material3';

const Container = styled.div`
	height: calc(100vh - ${headerHeight});
	background: linear-gradient(135deg, 
		${materialTheme.colors.surfaceContainerLow} 0%, 
		${materialTheme.colors.surfaceContainer} 30%, 
		${materialTheme.colors.surfaceContainerHigh} 70%, 
		${materialTheme.colors.tertiaryContainer} 100%);
	position: relative;
	overflow: hidden;
`;

const BackgroundSoldier = styled.img`
	max-height: 40%;
	max-width: 25%;
	height: 300px;
	object-fit: cover;
	aspect-ratio: 1/1;
	image-rendering: pixelated;
 	position: absolute;
	bottom: 48px;
	left: 48px;
	opacity: 0.8;
	filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
	
	@media (max-width: 768px) {
		display: none;
	}
`;

const Slogan = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
	max-width: 800px;
	padding: 0 24px;
	
	h1 {
		font-family: ${materialTheme.typography.displayMedium.fontFamily};
		font-size: ${materialTheme.typography.displayMedium.fontSize};
		line-height: ${materialTheme.typography.displayMedium.lineHeight};
		font-weight: ${materialTheme.typography.displayMedium.fontWeight};
		letter-spacing: ${materialTheme.typography.displayMedium.letterSpacing};
		color: ${materialTheme.colors.onBackground};
		margin: 0 0 16px 0;
	}
	
	h2 {
		font-family: ${materialTheme.typography.headlineSmall.fontFamily};
		font-size: ${materialTheme.typography.headlineSmall.fontSize};
		line-height: ${materialTheme.typography.headlineSmall.lineHeight};
		font-weight: ${materialTheme.typography.headlineSmall.fontWeight};
		letter-spacing: ${materialTheme.typography.headlineSmall.letterSpacing};
		color: ${materialTheme.colors.onSurfaceVariant};
		margin: 0;
	}
	
	@media (max-width: 768px) {
		h1 {
			font-size: ${materialTheme.typography.displaySmall.fontSize};
			line-height: ${materialTheme.typography.displaySmall.lineHeight};
		}
		h2 {
			font-size: ${materialTheme.typography.headlineSmall.fontSize};
			line-height: ${materialTheme.typography.headlineSmall.lineHeight};
		}
	}
`;

const StyledScrollToContent = styled(ScrollToContent)`
	position: absolute;
	bottom: 24px;
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