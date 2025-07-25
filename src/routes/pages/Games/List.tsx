/*
 * File: List.tsx
 * File Created: Friday, 14th April 2023 10:05:22 pm
 * Author: Marek Fischer
 * -----
 * Last Modified: Sunday, 16th April 2023 8:31:11 pm
 * Modified By: Marek Fischer 
 * -----
 * Copyright - 2023 Deep Vertic
 */
import React from 'react'
import ArticleList from '../../../components/ArticleList/ArticleList'
import ArticleListItem from '../../../components/ArticleList/ArticleListItem'

type Props = {}

const List = (props: Props) => {
	return (
		<ArticleList>
			<ArticleListItem
				title="Skeletons and Traps"
				thumbnail={{
					url: "https://img.itch.zone/aW1nLzQ5NjI5MTEucG5n/original/dM%2F9xy.png",
					alt: "Skeletons and Traps"
				}}
				description="You are a lone fighter searching for a challenge.. You are trapped in this realm of monsters and have to find an exit. During this travel you have to fight monsters, archers, knights, avoid traps and use your dexterity and strength to jump from platform to platform and wall to wall."
				url="https://deepvertic.itch.io/skeletonsandtraps"
				linkText="Play Game"
			/>
		</ArticleList>
	)
}

export default List