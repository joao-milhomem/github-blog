import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Header } from '../../components/Header'
import { PostDetails, PostMain } from './style'
import {
	faArrowUpRightFromSquare,
	faCalendarDay,
	faChevronLeft,
	faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { issueDataApi } from '../../libs/axios'
import Markdown from 'react-markdown'

interface IssueProps {
	id: number
	title: string
	body: string
	created_at: string
	comments: number
	user: {
		login: string
	}
}

export const Post = () => {
	const [issueData, setIssueData] = useState<IssueProps>()

	const { number } = useParams()

	useEffect(() => {
		async function getIssueData() {
			const { data } = await issueDataApi.get(`/${number}`)
			setIssueData(data)
		}

		getIssueData()
	}, [number])

	console.log(issueData)

	return (
		<div>
			<Header />

			<PostDetails>
				<nav>
					<a href="/">
						<FontAwesomeIcon icon={faChevronLeft} size="sm" />
						Voltar
					</a>
					<a href="/post">
						Ver no github
						<FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" />
					</a>
				</nav>

				{issueData?.title && <h1>{issueData.title}</h1>}

				<footer className="badges">
					<span>
						<FontAwesomeIcon icon={faGithub} />
						{issueData?.user.login}
					</span>
					<time dateTime="2022-01-01">
						<FontAwesomeIcon icon={faCalendarDay} />
						{issueData?.created_at}
					</time>
					<span>
						<FontAwesomeIcon icon={faComment} />
						{issueData?.comments}
					</span>
				</footer>
			</PostDetails>

			<PostMain>
				<div className="content">
					<Markdown>{issueData?.body}</Markdown>
				</div>
			</PostMain>
		</div>
	)
}
