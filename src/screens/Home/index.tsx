import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Header } from '../../components/Header'
import { ProfileComponent, ProfileContent } from './style'
import {
	faArrowUpRightFromSquare,
	faBuilding,
	faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export const Home = () => {
	return (
		<div>
			<Header />

			<ProfileComponent>
				<img src="https://github.com/joaomilhomem.png" alt="" />

				<ProfileContent className="profile-content">
					<header>
						<strong>Joao Paulo Milhomem</strong>
						<a href="github.com">
							Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
						</a>
					</header>

					<p className="about-me">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
						risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
						nec.
					</p>

					<nav className="badges">
						<span>
							<FontAwesomeIcon icon={faGithub} />
							joaomilhomem
						</span>

						<span>
							<FontAwesomeIcon icon={faBuilding} />
							Rocketseat
						</span>

						<span>
							<FontAwesomeIcon icon={faUserGroup} />
							322 seguidores
						</span>
					</nav>
				</ProfileContent>
			</ProfileComponent>
		</div>
	)
}
