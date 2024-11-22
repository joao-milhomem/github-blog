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
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { GithubAPIs } from '../../libs/axios'
import Markdown from 'react-markdown'
import type { IssueProps } from '../Home'
import { dateFormatter } from '../../utils/formatter'

interface Issue extends IssueProps {
	comments: string
	user: {
		login: string
	}
}
export const PostContent = () => {
	const [issueData, setIssueData] = useState<Issue>()
	const { number } = useParams()
	const navigate = useNavigate()

	const formattedDate = dateFormatter(issueData?.created_at || '')

	useEffect(() => {
		async function getIssueData() {
			const { data } = await GithubAPIs.issueData.get(`/${number}`)
			setIssueData(data)
		}

		getIssueData()
	}, [number])

	return (
		<div>
			<Header />

			<PostDetails>
				<nav>
					<Link to="" type="button" onClick={() => navigate(-1)}>
						<FontAwesomeIcon icon={faChevronLeft} size="sm" />
						Voltar
					</Link>
					<a
						href={`https://github.com/joao-milhomem/github-blog/issues/${number}`}
						target="_blank"
						rel="noreferrer"
					>
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
						{formattedDate}
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
