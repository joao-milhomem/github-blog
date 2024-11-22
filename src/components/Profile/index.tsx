import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ProfileComponent, ProfileContent } from './style'
import {
	faArrowUpRightFromSquare,
	faBuilding,
	faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react'
import { GithubAPIs } from '../../libs/axios'

interface GitProfileProps {
	id: number
	name: string
	login: string
	followers: number
	company: string
	avatar_url: string
	bio: string
}

const Profile = () => {
	const [gitProfileData, setGitProfileData] = useState({} as GitProfileProps)

	async function getGitProfileData() {
		const { data } = await GithubAPIs.profileData.get('/joao-milhomem')

		if (data) {
			const userData: GitProfileProps = {
				id: data.id,
				name: data.name,
				login: data.login,
				followers: data.followers,
				company: data.company,
				avatar_url: data.avatar_url,
				bio: data.bio,
			}
			setGitProfileData(userData)
		}
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		getGitProfileData()
	}, [])

	return (
		<ProfileComponent>
			<img src={gitProfileData.avatar_url} alt="" />

			<ProfileContent className="profile-content">
				<header>
					<strong>{gitProfileData.name}</strong>
					<a
						href={`https://github.com/${gitProfileData.login}`}
						target="_blank"
						rel="noreferrer"
					>
						Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
					</a>
				</header>

				<p className="about-me">{gitProfileData.bio}</p>

				<footer className="badges">
					<span>
						<FontAwesomeIcon icon={faGithub} size="lg" />
						{gitProfileData.login}
					</span>

					<span>
						<FontAwesomeIcon icon={faBuilding} />
						{gitProfileData.company ?? '-'}
					</span>

					<span>
						<FontAwesomeIcon icon={faUserGroup} />
						{gitProfileData.followers}
					</span>
				</footer>
			</ProfileContent>
		</ProfileComponent>
	)
}

export default Profile
