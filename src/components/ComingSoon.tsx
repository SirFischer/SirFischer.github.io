import React from 'react'
import styled from 'styled-components';
import { materialTheme } from '../theme/material3';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 64px 32px;
	background: linear-gradient(145deg, 
		${materialTheme.colors.surfaceContainer} 0%, 
		${materialTheme.colors.surfaceContainerHigh} 50%, 
		${materialTheme.colors.tertiaryContainer} 100%);
	border-radius: ${materialTheme.shape.corner.extraLarge};
	box-shadow: ${materialTheme.elevation.level4};
	max-width: 900px;
	margin: 0 auto;
	position: relative;
	overflow: hidden;

	&::before {
		content: '';
		position: absolute;
		top: -50%;
		left: -50%;
		width: 200%;
		height: 200%;
		background: radial-gradient(circle, 
			rgba(198, 40, 40, 0.03) 0%, 
			transparent 70%);
		animation: float 8s ease-in-out infinite;
	}

	@keyframes float {
		0%, 100% { transform: translate(0, 0) rotate(0deg); }
		33% { transform: translate(10px, -10px) rotate(1deg); }
		66% { transform: translate(-5px, 5px) rotate(-0.5deg); }
	}
`;

const ContentWrapper = styled.div`
	position: relative;
	z-index: 1;
`;

const Title = styled.h2`
	font-family: ${materialTheme.typography.displayMedium.fontFamily};
	font-size: ${materialTheme.typography.displayMedium.fontSize};
	line-height: ${materialTheme.typography.displayMedium.lineHeight};
	font-weight: 700;
	letter-spacing: ${materialTheme.typography.displayMedium.letterSpacing};
	background: linear-gradient(135deg, 
		${materialTheme.colors.onSurface} 0%, 
		${materialTheme.colors.tertiary} 100%);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	margin: 0 0 16px 0;
	
	@media (max-width: 768px) {
		font-size: ${materialTheme.typography.displaySmall.fontSize};
	}
`;

const Subtitle = styled.h3`
	font-family: ${materialTheme.typography.headlineSmall.fontFamily};
	font-size: ${materialTheme.typography.headlineSmall.fontSize};
	line-height: ${materialTheme.typography.headlineSmall.lineHeight};
	font-weight: 500;
	letter-spacing: ${materialTheme.typography.headlineSmall.letterSpacing};
	color: ${materialTheme.colors.tertiary};
	margin: 0 0 32px 0;
	position: relative;

	&::after {
		content: '';
		position: absolute;
		bottom: -8px;
		left: 50%;
		transform: translateX(-50%);
		width: 80px;
		height: 3px;
		background: linear-gradient(90deg, 
			transparent 0%, 
			${materialTheme.colors.tertiary} 50%, 
			transparent 100%);
		border-radius: 2px;
	}
`;

const Description = styled.p`
	font-family: ${materialTheme.typography.bodyLarge.fontFamily};
	font-size: ${materialTheme.typography.bodyLarge.fontSize};
	line-height: 1.7;
	font-weight: ${materialTheme.typography.bodyLarge.fontWeight};
	letter-spacing: ${materialTheme.typography.bodyLarge.letterSpacing};
	color: ${materialTheme.colors.onSurfaceVariant};
	margin: 0 0 48px 0;
	max-width: 650px;
`;

const FocusAreas = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	gap: 32px;
	width: 100%;
	margin-top: 24px;
`;

const FocusArea = styled.div`
	padding: 32px 24px;
	background: linear-gradient(135deg, 
		${materialTheme.colors.surfaceContainerLowest} 0%, 
		${materialTheme.colors.surfaceContainerLow} 100%);
	border-radius: ${materialTheme.shape.corner.extraLarge};
	border: 1px solid ${materialTheme.colors.outlineVariant};
	transition: all ${materialTheme.motion.duration.medium2} ${materialTheme.motion.easing.emphasizedDecelerate};
	position: relative;
	overflow: hidden;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 4px;
		background: linear-gradient(90deg, 
			${materialTheme.colors.primary} 0%, 
			${materialTheme.colors.tertiary} 100%);
		transform: scaleX(0);
		transform-origin: left;
		transition: transform ${materialTheme.motion.duration.medium2} ${materialTheme.motion.easing.emphasizedDecelerate};
	}

	&:hover {
		transform: translateY(-8px);
		box-shadow: ${materialTheme.elevation.level5};
		border-color: ${materialTheme.colors.tertiary};

		&::before {
			transform: scaleX(1);
		}
	}
`;

const FocusIcon = styled.div`
	font-size: 48px;
	margin-bottom: 20px;
	position: relative;
	display: inline-block;
	
	&::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 80px;
		height: 80px;
		background: radial-gradient(circle, 
			${materialTheme.colors.tertiaryContainer} 0%, 
			transparent 70%);
		border-radius: 50%;
		z-index: -1;
		opacity: 0.3;
	}
`;

const FocusTitle = styled.h4`
	font-family: ${materialTheme.typography.titleLarge.fontFamily};
	font-size: ${materialTheme.typography.titleLarge.fontSize};
	line-height: ${materialTheme.typography.titleLarge.lineHeight};
	font-weight: 600;
	letter-spacing: ${materialTheme.typography.titleLarge.letterSpacing};
	color: ${materialTheme.colors.onSurface};
	margin: 0 0 12px 0;
`;

const FocusDescription = styled.p`
	font-family: ${materialTheme.typography.bodyMedium.fontFamily};
	font-size: ${materialTheme.typography.bodyMedium.fontSize};
	line-height: 1.6;
	font-weight: ${materialTheme.typography.bodyMedium.fontWeight};
	letter-spacing: ${materialTheme.typography.bodyMedium.letterSpacing};
	color: ${materialTheme.colors.onSurfaceVariant};
	margin: 0;
`;

type Props = {}

const AboutDeepVertic = (props: Props) => {
  return (
	<Container>
		<ContentWrapper>
			<Title>
				Welcome to DeepVertic
			</Title>
			<Subtitle>
				One Developer, Infinite Possibilities
			</Subtitle>
			<Description>
				DeepVertic is a passionate one-person project dedicated to creating innovative digital solutions and engaging games. 
				I specialize in building tools and experiences for people who are interested in finance, love indie games, 
				and are always looking for ways to optimize their lives.
			</Description>
			
			<FocusAreas>
				<FocusArea>
					<FocusIcon>💰</FocusIcon>
					<FocusTitle>Financial Tools</FocusTitle>
					<FocusDescription>
						Smart calculators and backtesting tools to help you make informed financial decisions and plan for the future.
					</FocusDescription>
				</FocusArea>
				
				<FocusArea>
					<FocusIcon>🎮</FocusIcon>
					<FocusTitle>Indie Games</FocusTitle>
					<FocusDescription>
						Unique gaming experiences that challenge and entertain, crafted with attention to detail and creative gameplay.
					</FocusDescription>
				</FocusArea>
				
				<FocusArea>
					<FocusIcon>⚡</FocusIcon>
					<FocusTitle>Life Optimization</FocusTitle>
					<FocusDescription>
						Apps and tools designed to streamline your daily routines and help you achieve your personal and professional goals.
					</FocusDescription>
				</FocusArea>
			</FocusAreas>
		</ContentWrapper>
	</Container>
  )
}

export default AboutDeepVertic