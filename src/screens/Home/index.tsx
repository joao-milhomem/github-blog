import { Header } from '../../components/Header'
import { PostsComponent, PostSearchForm, PostsList } from './style'
import Profile from '../../components/Profile'
import { useEffect, useState } from 'react'
import { Post } from '../../components/Post'

export interface IssueProps {
	id: number
	title: string
	body: string
	created_at: string
}

export const Home = () => {
	const [issues, setIssues] = useState<IssueProps[]>([])

	useEffect(() => {
		fetch(
			'https://api.github.com/search/issues?q=repo:joao-milhomem/github-blog',
		)
			.then((response) => response.json())
			.then((data) => setIssues(data.items))
	}, [])

	return (
		<div>
			<Header />

			<Profile />

			<PostsComponent>
				<header>
					<h2>Publicações</h2>
					<small>{issues.length} publicações</small>
				</header>

				<PostSearchForm>
					<input type="text" placeholder="Busque por publicação" />
				</PostSearchForm>

				<PostsList>
					{issues.length > 0 &&
						issues.map((issue) => {
							return (
								<li key={issue.id}>
									<Post issue={issue} />
								</li>
							)
						})}
				</PostsList>
			</PostsComponent>
		</div>
	)
}
