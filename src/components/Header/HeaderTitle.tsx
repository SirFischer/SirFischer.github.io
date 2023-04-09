/*
 * File: HeaderTitle.tsx
 * File Created: Sunday, 9th April 2023 12:56:19 pm
 * Author: Marek Fischer
 * -----
 * Last Modified: Sunday, 9th April 2023 5:14:25 pm
 * Modified By: Marek Fischer 
 * -----
 * Copyright - 2023 Deep Vertic
 */
import React from 'react'
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Logo = styled.img`
	height: 100%;
`;

type Props = {}

const HeaderTitle = (props: Props) => {
  return (
	<Link to="/" >
		<Logo src={logo} alt="logo" />
	</Link>
  )
}

export default HeaderTitle