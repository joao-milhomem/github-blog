import type { IssueProps } from '../../screens/Home'
import { PostComponent } from './style'
import { calcDateInterval } from '../../utils/formatter'

interface Post {
	issue: IssueProps
}

export const PostItem = ({ issue }: Post) => {
	const date = calcDateInterval(issue.created_at)

	return (
		<PostComponent to={`/issues/${issue.number}`}>
			<header>
				<h3>{issue.title}</h3>
				<time dateTime={issue.created_at}>{date}</time>
			</header>

			<p className="content">{issue.body}</p>
		</PostComponent>
	)
}
