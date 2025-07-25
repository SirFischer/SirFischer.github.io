import React from 'react'
import styled from 'styled-components';
import { materialTheme } from '../../theme/material3';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	background-color: ${materialTheme.colors.surfaceContainerLow};
	border-radius: ${materialTheme.shape.corner.medium};
	box-shadow: ${materialTheme.elevation.level1};
	overflow: hidden;
	transition: all ${materialTheme.motion.duration.short4} ${materialTheme.motion.easing.standard};
	position: relative;

	&:hover {
		box-shadow: ${materialTheme.elevation.level2};
		transform: translateY(-2px);
	}

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const ImageContainer = styled.div`
	flex-shrink: 0;
	width: 150px;
	height: 150px;
	
	@media (max-width: 768px) {
		width: 100%;
		height: 200px;
	}
`;

const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const Details = styled.div`
	display: flex;
	flex-direction: column;
	padding: 16px;
	position: relative;
	flex-grow: 1;
	gap: 8px;
`;

const Title = styled.h2`
	font-family: ${materialTheme.typography.headlineSmall.fontFamily};
	font-size: ${materialTheme.typography.headlineSmall.fontSize};
	line-height: ${materialTheme.typography.headlineSmall.lineHeight};
	font-weight: ${materialTheme.typography.headlineSmall.fontWeight};
	letter-spacing: ${materialTheme.typography.headlineSmall.letterSpacing};
	color: ${materialTheme.colors.onSurface};
	margin: 0;
`;

const Description = styled.p`
	font-family: ${materialTheme.typography.bodyMedium.fontFamily};
	font-size: ${materialTheme.typography.bodyMedium.fontSize};
	line-height: ${materialTheme.typography.bodyMedium.lineHeight};
	font-weight: ${materialTheme.typography.bodyMedium.fontWeight};
	letter-spacing: ${materialTheme.typography.bodyMedium.letterSpacing};
	color: ${materialTheme.colors.onSurfaceVariant};
	margin: 0;
	flex-grow: 1;
`;

const Link = styled.a<{ $offline?: boolean }>`
	font-family: ${materialTheme.typography.labelLarge.fontFamily};
	font-size: ${materialTheme.typography.labelLarge.fontSize};
	line-height: ${materialTheme.typography.labelLarge.lineHeight};
	font-weight: ${materialTheme.typography.labelLarge.fontWeight};
	letter-spacing: ${materialTheme.typography.labelLarge.letterSpacing};
	text-decoration: none;
	align-self: flex-start;
	padding: 10px 20px;
	border-radius: ${materialTheme.shape.corner.medium};
	background-color: ${props => props.$offline ? materialTheme.colors.surfaceVariant : materialTheme.colors.primaryContainer};
	color: ${props => props.$offline ? materialTheme.colors.onSurfaceVariant : materialTheme.colors.onPrimaryContainer};
	transition: all ${materialTheme.motion.duration.short2} ${materialTheme.motion.easing.standard};
	position: relative;
	overflow: hidden;
	cursor: ${props => props.$offline ? 'not-allowed' : 'pointer'};

	&::before {
		content: '';
		position: absolute;
		inset: 0;
		background-color: ${props => props.$offline ? materialTheme.colors.onSurfaceVariant : materialTheme.colors.onPrimaryContainer};
		opacity: 0;
		transition: opacity ${materialTheme.motion.duration.short2} ${materialTheme.motion.easing.standard};
	}

	&:hover::before {
		opacity: ${props => props.$offline ? 0 : 0.08};
	}

	&:focus-visible {
		outline: 2px solid ${materialTheme.colors.primary};
		outline-offset: 2px;
	}
`;

type Props = {
	title: string,
	thumbnail: {
		url: string
		alt: string
	},
	description: string,
	url: string,
	offline?: boolean,
	linkText?: string
}

const ArticleListItem = (props: Props) => {
  return (
	<Container>
		<ImageContainer>
			<Image src={props.thumbnail.url} alt={props.thumbnail.alt} />
		</ImageContainer>
		<Details>
			<Title>{props.title}</Title>
			<Description>{props.description}</Description>
			<Link 
				href={props.offline ? undefined : props.url} 
				$offline={props.offline} 
				target={props.offline ? undefined : "_blank"} 
				rel={props.offline ? undefined : "noopener noreferrer"}
			>
				{props.offline ? 'Offline' : (props.linkText || 'Read more!')}
			</Link>
		</Details>
	</Container>
  )
}

export default ArticleListItem