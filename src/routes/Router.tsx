import React from 'react'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Home from './pages/Home';
import Root from './pages/Root';
import Apps from './pages/Apps/Apps';
import Games from './pages/Games/Games';
import Tools from './pages/Tools/Tools';
import Contact from './pages/Contact';
import CV from './pages/CV/CV';

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
			},
			{
				path: '/contact',
				element: <Contact />
			},
			{
				path: '/cv',
				element: <CV />
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