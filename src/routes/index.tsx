import { Route, Routes } from 'react-router-dom'
import { Home } from '../screens/Home'
import { Post } from '../screens/Post'

export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/issues/:number" element={<Post />} />
		</Routes>
	)
}
