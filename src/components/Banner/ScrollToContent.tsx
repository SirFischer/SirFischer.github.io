/*
 * File: ScrollToContent.tsx
 * File Created: Sunday, 9th April 2023 1:51:52 pm
 * Author: Marek Fischer
 * -----
 * Last Modified: Sunday, 9th April 2023 1:59:03 pm
 * Modified By: Marek Fischer 
 * -----
 * Copyright - 2023 Deep Vertic
 */
import React from 'react'
import styled from 'styled-components';

const Button = styled.button`
	border: none;
	cursor: pointer;
`;

const Icon = styled.i`
	font-size: 4rem;
`;

type Props = {
	containerRef: React.RefObject<HTMLDivElement>
} & React.HTMLAttributes<HTMLButtonElement>;

const ScrollToContent = ({
	containerRef,
	...props
}: Props) => {
  return (
	<Button
		{...props}
		title='Scroll down'
		onClick={() => {
			if (containerRef.current) {
				window.scrollTo({
					top: containerRef.current.offsetTop + containerRef.current.offsetHeight,
					behavior: 'smooth'
				});
			}
		}}
	>
		<Icon className='ri-arrow-down-line' />
	</Button>
  )
}

export default ScrollToContent