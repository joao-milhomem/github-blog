import type { IssueProps } from '../../screens/Home'
import { dateFormatter } from '../../utils/formatter'
import { PostComponent } from './style'

interface Post {
	issue: IssueProps
}

export const PostItem = ({ issue }: Post) => {
	const formattedDate = dateFormatter(issue.created_at || '')

	return (
		<PostComponent to={`/issues/${issue.number}`}>
			<header>
				<h3>{issue.title}</h3>
				<time dateTime={issue.created_at}>{formattedDate}</time>
			</header>

			<p className="content">{issue.body}</p>
		</PostComponent>
	)
}
