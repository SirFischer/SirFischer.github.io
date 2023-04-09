/*
 * File: NavigationLink.tsx
 * File Created: Sunday, 9th April 2023 9:20:24 am
 * Author: Marek Fischer
 * -----
 * Last Modified: Sunday, 9th April 2023 10:01:02 am
 * Modified By: Marek Fischer 
 * -----
 * Copyright - 2023 Deep Vertic
 */
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const StyledNavLink = styled(NavLink)`
	color: black;
  	text-decoration: none;
  	&:hover {
		color: #555;
 	}
  	&.active {
		color: #000;
		border-bottom: 2px solid #000;
	}
`

type Props = {
	to: string,
	children: React.ReactNode
}

const NavigationLink = (props: Props) => {
	return (
		<StyledNavLink
			to={props.to}
		>
			{props.children}
		</StyledNavLink>
	)
}

export default NavigationLink