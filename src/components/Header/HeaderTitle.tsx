/*
 * File: HeaderTitle.tsx
 * File Created: Sunday, 9th April 2023 12:56:19 pm
 * Author: Marek Fischer
 * -----
 * Last Modified: Sunday, 9th April 2023 12:58:38 pm
 * Modified By: Marek Fischer 
 * -----
 * Copyright - 2023 Deep Vertic
 */
import React from 'react'
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Logo = styled.img`
	width: 100px;
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