import React from 'react'
import styled from 'styled-components';
import { materialTheme } from '../theme/material3';

const Container = styled.footer`
	padding: 24px;
	background-color: ${materialTheme.colors.surfaceContainer};
	color: ${materialTheme.colors.onSurface};
	border-top: 1px solid ${materialTheme.colors.outlineVariant};
	text-align: center;
	font-family: ${materialTheme.typography.bodyMedium.fontFamily};
	font-size: ${materialTheme.typography.bodyMedium.fontSize};
	line-height: ${materialTheme.typography.bodyMedium.lineHeight};
	font-weight: ${materialTheme.typography.bodyMedium.fontWeight};
	letter-spacing: ${materialTheme.typography.bodyMedium.letterSpacing};
`;

type Props = {}

const Footer = (props: Props) => {
  return (
	<Container>© 2025 Deep Vertic. All rights reserved.</Container>
  )
}

export default Footer