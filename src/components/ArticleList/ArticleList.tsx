import React from 'react'
import styled from 'styled-components';

const List = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

type Props = {
	children: React.ReactNode
}

const ArticleList = (props: Props) => {
	return (
		<List>{props.children}</List>
  )
}

export default ArticleList