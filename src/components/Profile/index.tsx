import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ProfileComponent, ProfileContent } from './style'
import {
	faArrowUpRightFromSquare,
	faBuilding,
	faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react'

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

	useEffect(() => {
		fetch('https://api.github.com/users/joaomilhomem')
			.then((response) => response.json())
			.then((data) => {
				const profileData: GitProfileProps = {
					id: data.id,
					name: data.name,
					login: data.login,
					followers: data.followers,
					company: data.company,
					avatar_url: data.avatar_url,
					bio: data.bio,
				}

				setGitProfileData(profileData)
			})
	}, [])

	return (
		<ProfileComponent>
			<img src={gitProfileData.avatar_url} alt="" />

			<ProfileContent className="profile-content">
				<header>
					<strong>{gitProfileData.name}</strong>
					<a href="github.com">
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
						{gitProfileData.company}
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
