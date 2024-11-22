import { Route, Routes } from 'react-router-dom'
import { Home } from '../screens/Home'
import { PostContent } from '../screens/PostContent'

export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/issues/:number" element={<PostContent />} />
		</Routes>
	)
}
