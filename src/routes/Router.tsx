import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import Root from './pages/Root';

type Props = {}

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '/',
				element: <Home />
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