/*
 * File: ScrollToTop.tsx
 * File Created: Sunday, 9th April 2023 2:07:59 pm
 * Author: Marek Fischer
 * -----
 * Last Modified: Sunday, 9th April 2023 2:13:56 pm
 * Modified By: Marek Fischer 
 * -----
 * Copyright - 2023 Deep Vertic
 */
import React, { useEffect } from 'react'
import styled from 'styled-components';

const Button = styled.button<{ visible: boolean }>`
	border: none;
	cursor: pointer;
	position: fixed;
	bottom: 2rem;
	right: 2rem;
	opacity: ${props => props.visible ? 1 : 0};
	transition: opacity 0.3s ease-in-out;
`;

const Icon = styled.i`
	font-size: 3rem;
`;

type Props = {}

const ScrollToTop = (props: Props) => {
	const [isVisible, setIsVisible] = React.useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.pageYOffset > window.innerHeight) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', toggleVisibility);

		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	return (
		<Button
			visible={isVisible}
			title='Scroll to top'
			onClick={() => {
				window.scrollTo({
					top: 0,
					behavior: 'smooth'
				});
			}}
		>
			<Icon className='ri-arrow-up-line' />
		</Button>
	)
}

export default ScrollToTop