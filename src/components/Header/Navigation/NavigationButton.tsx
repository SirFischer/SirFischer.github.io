import React, { Ref, forwardRef } from 'react'
import styled from 'styled-components';

const NavButton = styled.button<{open : boolean}>`
	display: none;
	height: fit-content;
	padding: 0.5rem;
	align-self: center;
	background-color: transparent;
	border: none;
	font-size: 1.7em;
	font-weight: 600;
	transition: all 0.2s ease-in-out;
	cursor: pointer;
	@media (max-width: 768px) {
		display: block;
	}
	${({open}) => open && ({ transform: 'rotate(90deg)' })}
`;

type Props = {
	open: boolean,
	toggleOpen: () => void,
}

const NavigationButton = forwardRef((props: Props, ref: Ref<HTMLButtonElement>) => {
  return (
	<NavButton
		onClick={props.toggleOpen}
		ref={ref} open={props.open}
	>
		<i className="ri-menu-line" />
	</NavButton>
  )
})

export default NavigationButton