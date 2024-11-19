import { Header } from '../../components/Header'
import { PostsComponent, PostSearchForm, PostsList } from './style'
import Profile from '../../components/Profile'
import { type ChangeEvent, useEffect, useState } from 'react'
import { Post } from '../../components/Post'

export interface IssueProps {
	id: number
	title: string
	body: string
	created_at: string
}

export const Home = () => {
	const [issues, setIssues] = useState<IssueProps[]>([])
	const [query, setQuery] = useState('')

	function handleOnChangeQuery(e: ChangeEvent<HTMLInputElement>) {
		setQuery(e.target.value)
	}

	function fetchWithDelay(query: string) {
		return new Promise<void>((resolve) => {
			const timeOut = setTimeout(() => {
				fetch(
					`https://api.github.com/search/issues?q=${query}%20repo:joao-milhomem/github-blog`,
				)
					.then((response) => response.json())
					.then((data) => {
						setIssues(data.items)
						resolve()
						console.log('delay')
					})
					.catch((error) => {
						console.error('Erro na requisição', error)
						resolve()
					})
			}, 2000)

			return () => clearTimeout(timeOut)
		})
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (query) {
			fetchWithDelay(query)
		}

		fetch(
			'https://api.github.com/search/issues?q=repo:joao-milhomem/github-blog',
		)
			.then((response) => response.json())
			.then((data) => setIssues(data.items))
	}, [query])

	return (
		<div>
			<Header />

			<Profile />

			<PostsComponent>
				<header>
					<h2>Publicações</h2>
					<small>
						{issues.length > 0 ? issues.length : 0}
						publicações
					</small>
				</header>

				<PostSearchForm>
					<input
						type="text"
						placeholder="Busque por publicação"
						onChange={handleOnChangeQuery}
					/>
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
