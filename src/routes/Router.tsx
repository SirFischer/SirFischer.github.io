import React from 'react'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Home from './pages/Home';
import Root from './pages/Root';
import Apps from './pages/Apps/Apps';
import Games from './pages/Games/Games';
import Tools from './pages/Tools/Tools';

type Props = {}

const router = createHashRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: '/apps',
				element: <Apps />
			},
			{
				path: '/games',
				element: <Games />
			},
			{
				path: '/tools',
				element: <Tools />
			}
		]
	}
]);

const Router = (props: Props) => {
  return (
	<RouterProvider router={router} />
  )
}

export default Router