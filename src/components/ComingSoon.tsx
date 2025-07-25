import React from 'react'
import styled from 'styled-components';
import { materialTheme } from '../theme/material3';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 48px 24px;
	background-color: ${materialTheme.colors.surfaceContainer};
	border-radius: ${materialTheme.shape.corner.extraLarge};
	box-shadow: ${materialTheme.elevation.level2};
	max-width: 600px;
	margin: 0 auto;
`;

const Title = styled.h2`
	font-family: ${materialTheme.typography.headlineLarge.fontFamily};
	font-size: ${materialTheme.typography.headlineLarge.fontSize};
	line-height: ${materialTheme.typography.headlineLarge.lineHeight};
	font-weight: ${materialTheme.typography.headlineLarge.fontWeight};
	letter-spacing: ${materialTheme.typography.headlineLarge.letterSpacing};
	color: ${materialTheme.colors.onSurface};
	margin: 0 0 16px 0;
`;

const Subtitle = styled.p`
	font-family: ${materialTheme.typography.bodyLarge.fontFamily};
	font-size: ${materialTheme.typography.bodyLarge.fontSize};
	line-height: ${materialTheme.typography.bodyLarge.lineHeight};
	font-weight: ${materialTheme.typography.bodyLarge.fontWeight};
	letter-spacing: ${materialTheme.typography.bodyLarge.letterSpacing};
	color: ${materialTheme.colors.onSurfaceVariant};
	margin: 0;
`;

type Props = {}

const ComingSoon = (props: Props) => {
  return (
	<Container>
		<Title>
			Coming soon!
		</Title>
		<Subtitle>
			Site under construction.
		</Subtitle>
	</Container>
  )
}

export default ComingSoon