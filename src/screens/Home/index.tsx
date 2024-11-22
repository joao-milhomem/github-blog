import { Header } from '../../components/Header'
import { PostsComponent, PostSearchForm, PostsList } from './style'
import Profile from '../../components/Profile'
import { type ChangeEvent, useEffect, useState } from 'react'
import { gitIssuesApi } from '../../libs/axios'
import { PostItem } from '../../components/PostItem'

export interface IssueProps {
	id: number
	number: number
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

	async function fetchIssues(query?: string) {
		if (query) {
			const { data } = await gitIssuesApi.get('', {
				params: {
					q: `${query} repo:joao-milhomem/github-blog`,
				},
			})

			if (data.items && data.items.length > 0) {
				setIssues(data.items)
			}
		} else {
			const { data } = await gitIssuesApi.get('', {
				params: {
					q: 'repo:joao-milhomem/github-blog',
				},
			})

			if (data.items && data.items.length > 0) {
				setIssues(data.items)
			}
		}
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetchIssues(query)
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
									<PostItem issue={issue} />
								</li>
							)
						})}
				</PostsList>
			</PostsComponent>
		</div>
	)
}
