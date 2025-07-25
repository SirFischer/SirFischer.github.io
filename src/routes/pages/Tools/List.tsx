/*
 * File: List.tsx
 * File Created: Friday, 25th July 2025
 * Author: Marek Fischer
 * -----
 * Copyright - 2025 Deep Vertic
 */
import React from 'react'
import ArticleList from '../../../components/ArticleList/ArticleList'
import ArticleListItem from '../../../components/ArticleList/ArticleListItem'

type Props = {}

const List = (props: Props) => {
	return (
		<ArticleList>
			<ArticleListItem
				title="SWR Backtester"
				thumbnail={{
					url: "https://swr-backtester.deepvertic.com/assets/fireshield.svg",
					alt: "SWR Backtester"
				}}
				description="A tool for backtesting different Safe Withdrawal Rates (SWR) strategies for retirement planning and portfolio management."
				url="https://swr-backtester.deepvertic.com/"
				linkText="Use Tool"
			/>
			<ArticleListItem
				title="Vertic Planner"
				thumbnail={{
					url: "https://verticplanner.deepvertic.com/assets/banner-zGmHDdVK.png",
					alt: "Vertic Planner"
				}}
				description="Your personal productivity assistant with dynamic timetables, task management, and intelligent suggestions to boost your productivity and organize your day."
				url="https://verticplanner.deepvertic.com/"
				linkText="Use Tool"
			/>
		</ArticleList>
	)
}

export default List
