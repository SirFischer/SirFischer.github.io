import React from 'react'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Home from './pages/Home';
import Root from './pages/Root';
import Apps from './pages/Apps';

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