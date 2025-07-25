/*
 * File: ExternalNavigationLink.tsx
 * File Created: Friday, 25th July 2025
 * Author: Marek Fischer
 * -----
 * Copyright - 2025 Deep Vertic
 */
import React from 'react'
import styled from 'styled-components'

const StyledLink = styled.a`
	color: black;
  	text-decoration: none;
	height: fit-content;
	font-size: 1.2em;
  	&:hover {
		color: #555;
 	}
`

type Props = {
	href: string,
	children: React.ReactNode
}

const ExternalNavigationLink = (props: Props) => {
	return (
		<StyledLink
			href={props.href}
			target="_blank"
			rel="noopener noreferrer"
		>
			{props.children}
		</StyledLink>
	)
}

export default ExternalNavigationLink
