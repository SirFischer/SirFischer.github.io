import React from 'react'
import styled, { keyframes } from 'styled-components';
import { materialTheme } from '../theme/material3';

const fadeInUp = keyframes`
	from {
		opacity: 0;
		transform: translateY(30px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`;

const float = keyframes`
	0%, 100% { transform: translateY(0px); }
	50% { transform: translateY(-10px); }
`;

const shimmer = keyframes`
	0% { background-position: -1000px 0; }
	100% { background-position: 1000px 0; }
`;

const pulse = keyframes`
	0%, 100% { transform: scale(1); opacity: 0.8; }
	50% { transform: scale(1.05); opacity: 1; }
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 80px 40px;
	background: linear-gradient(135deg, 
		${materialTheme.colors.surface} 0%, 
		${materialTheme.colors.surfaceContainerLow} 100%);
	border-radius: ${materialTheme.shape.corner.extraLarge};
	box-shadow: ${materialTheme.elevation.level3};
	max-width: 1000px;
	margin: 0 auto;
	position: relative;
	overflow: hidden;
	animation: ${fadeInUp} 0.8s ease-out;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 2px;
		background: linear-gradient(90deg, 
			transparent, 
			${materialTheme.colors.tertiary}, 
			transparent);
		animation: ${shimmer} 3s ease-in-out infinite;
	}
`;

const Title = styled.h1`
	font-family: ${materialTheme.typography.displayMedium.fontFamily};
	font-size: clamp(2rem, 5vw, 3.5rem);
	line-height: 1.2;
	font-weight: 300;
	letter-spacing: -0.02em;
	color: ${materialTheme.colors.onSurface};
	margin: 0 0 24px 0;
	position: relative;
	animation: ${fadeInUp} 1s ease-out 0.2s both;

	&::after {
		content: '';
		position: absolute;
		bottom: -8px;
		left: 50%;
		transform: translateX(-50%);
		width: 60px;
		height: 2px;
		background: ${materialTheme.colors.tertiary};
		border-radius: 1px;
	}
`;

const Subtitle = styled.p`
	font-family: ${materialTheme.typography.titleLarge.fontFamily};
	font-size: ${materialTheme.typography.titleLarge.fontSize};
	line-height: 1.4;
	font-weight: 400;
	color: ${materialTheme.colors.tertiary};
	margin: 0 0 40px 0;
	animation: ${fadeInUp} 1s ease-out 0.4s both;
`;

const Description = styled.p`
	font-family: ${materialTheme.typography.bodyLarge.fontFamily};
	font-size: ${materialTheme.typography.bodyLarge.fontSize};
	line-height: 1.6;
	font-weight: 300;
	color: ${materialTheme.colors.onSurfaceVariant};
	margin: 0 0 60px 0;
	max-width: 700px;
	animation: ${fadeInUp} 1s ease-out 0.6s both;
`;

const FocusAreas = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 40px;
	width: 100%;
	margin-top: 20px;
`;

const FocusArea = styled.div`
	padding: 40px 30px;
	background: ${materialTheme.colors.surface};
	border-radius: ${materialTheme.shape.corner.large};
	border: 1px solid ${materialTheme.colors.outlineVariant};
	transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
	position: relative;
	overflow: hidden;
	animation: ${fadeInUp} 1s ease-out calc(0.8s + var(--delay)) both;

	&:nth-child(1) { --delay: 0s; }
	&:nth-child(2) { --delay: 0.1s; }
	&:nth-child(3) { --delay: 0.2s; }

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 100%;
		background: linear-gradient(135deg, 
			transparent 0%, 
			rgba(198, 40, 40, 0.02) 100%);
		opacity: 0;
		transition: opacity 0.4s ease;
	}

	&:hover {
		transform: translateY(-12px);
		box-shadow: ${materialTheme.elevation.level4};
		border-color: ${materialTheme.colors.tertiary};

		&::before {
			opacity: 1;
		}

		.focus-icon {
			animation: ${pulse} 2s ease-in-out infinite;
		}
	}
`;

const FocusIcon = styled.div`
	font-size: 56px;
	margin-bottom: 24px;
	display: inline-block;
	animation: ${float} 6s ease-in-out infinite;
	animation-delay: calc(var(--delay) * 0.5);

	&:nth-child(1) { --delay: 0s; }
	&:nth-child(2) { --delay: 2s; }
	&:nth-child(3) { --delay: 4s; }
`;

const FocusTitle = styled.h3`
	font-family: ${materialTheme.typography.titleLarge.fontFamily};
	font-size: ${materialTheme.typography.titleLarge.fontSize};
	line-height: 1.3;
	font-weight: 500;
	color: ${materialTheme.colors.onSurface};
	margin: 0 0 16px 0;
`;

const FocusDescription = styled.p`
	font-family: ${materialTheme.typography.bodyMedium.fontFamily};
	font-size: ${materialTheme.typography.bodyMedium.fontSize};
	line-height: 1.5;
	font-weight: 300;
	color: ${materialTheme.colors.onSurfaceVariant};
	margin: 0;
`;

type Props = {}

const AboutSection = (props: Props) => {
  return (
	<Container>
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
				<FocusIcon className="focus-icon">💰</FocusIcon>
				<FocusTitle>Financial Tools</FocusTitle>
				<FocusDescription>
					Smart calculators and backtesting tools to help you make informed financial decisions and plan for the future.
				</FocusDescription>
			</FocusArea>
			
			<FocusArea>
				<FocusIcon className="focus-icon">🎮</FocusIcon>
				<FocusTitle>Indie Games</FocusTitle>
				<FocusDescription>
					Unique gaming experiences that challenge and entertain, crafted with attention to detail and creative gameplay.
				</FocusDescription>
			</FocusArea>
			
			<FocusArea>
				<FocusIcon className="focus-icon">⚡</FocusIcon>
				<FocusTitle>Life Optimization</FocusTitle>
				<FocusDescription>
					Apps and tools designed to streamline your daily routines and help you achieve your personal and professional goals.
				</FocusDescription>
			</FocusArea>
		</FocusAreas>
	</Container>
  )
}

export default AboutSection
