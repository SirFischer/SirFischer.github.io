import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: row;
`;

const Image = styled.img`
	width: 150px;
	height: 150px;
	object-fit: cover;
	border-radius: 10px;
`;

const Details = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 0 0 1.5rem;
	position: relative;
	flex-grow: 1;
`;

const Title = styled.h2`
	font-size: 1.5rem;
	margin: 0;
`;

const Link = styled.a`
	color: #000;
	position: absolute;
	bottom: 0;
	right: 0;
`;

type Props = {
	title: string,
	thumbnail: {
		url: string
		alt: string
	},
	description: string,
	url: string,
}

const ArticleListItem = (props: Props) => {
  return (
	<Container>
		<Image src={props.thumbnail.url} alt={props.thumbnail.alt} />
		<Details>
			<Title>{props.title}</Title>
			<p>{props.description}</p>
			<Link href={props.url} target="_blank" >Read more!</Link>
		</Details>
	</Container>
  )
}

export default ArticleListItem