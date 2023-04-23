/*
 * File: List.tsx
 * File Created: Friday, 14th April 2023 4:09:37 pm
 * Author: Marek Fischer
 * -----
 * Last Modified: Sunday, 23rd April 2023 1:37:47 pm
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
				title="The Simple Gym Tracker"
				thumbnail={{
					url: "https://play-lh.googleusercontent.com/XTLS0ksU0fOrWf6--q83d3MR89TS2NTjmLaEAR6xtgdMfoIYXCJD-Nimpo9gKtKcFw=w240-h480-rw",
					alt: "The Simple Gym Tracker"
				}}
				description="A simple gym tracker that allows you to track your progress and keep track of your workouts."
				url="https://play.google.com/store/apps/details?id=com.deepvertic.gymtracker"
			/>
			<ArticleListItem
				title="Interest Calculator"
				thumbnail={{
					url: "",
					alt: "Interest Calculator"
				}}
				description="A simple interest calculator that allows you to calculate the interest on a loan or investment."
				url="https://play.google.com/store/apps/details?id=com.deepvertic.interestcalculator"
			/>
		</ArticleList>
	)
}

export default List