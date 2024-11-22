import type { IssueProps } from '../../screens/Home'
import { PostComponent } from './style'

interface Post {
	issue: IssueProps
}

export const PostItem = ({ issue }: Post) => {
	return (
		<PostComponent to={`/issues/${issue.number}`}>
			<header>
				<h3>{issue.title}</h3>
				<time dateTime="2022-01-01">há 1 semana</time>
			</header>

			<p className="content">{issue.body}</p>
		</PostComponent>
	)
}
