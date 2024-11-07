import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Header } from '../../components/Header'
import {
	Post,
	PostsComponent,
	PostSearchForm,
	PostsList,
	Profile,
	ProfileContent,
} from './style'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
	faArrowUpRightFromSquare,
	faBuilding,
	faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

export const Home = () => {
	return (
		<div>
			<Header />

			<Profile>
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

					<footer className="badges">
						<span>
							<FontAwesomeIcon icon={faGithub} size="lg" />
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
					</footer>
				</ProfileContent>
			</Profile>

			<PostsComponent>
				<header>
					<h2>Publicações</h2>
					<small>6 publicações</small>
				</header>

				<PostSearchForm>
					<input type="text" placeholder="Busque por publicação" />
				</PostSearchForm>

				<PostsList>
					<li>
						<Post href="">
							<header>
								<h3>JavaScript data types and data structures</h3>
								<time dateTime="2022-01-01">há 1 semana</time>
							</header>

							<p className="content">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
								odit ipsa facere sequi possimus maxime obcaecati totam non
								vitae.
							</p>
						</Post>
					</li>

					<li>
						<Post href="">
							<header>
								<h3>JavaScript data types and data structures</h3>
								<time dateTime="2022-01-01">há 1 dia</time>
							</header>

							<p className="content">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
								odit ipsa facere sequi possimus maxime obcaecati totam non vitae
								voluptas. Quibusdam, distinctio quia! Aspernatur asperiores
								voluptatibus odit nemo, necessitatibus maxime.
							</p>
						</Post>
					</li>

					<li>
						<Post href="">
							<header>
								<h3>JavaScript data types and data structures</h3>
								<time dateTime="2022-01-01">há 1 dia</time>
							</header>

							<p className="content">
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
								odit ipsa facere sequi possimus maxime obcaecati totam non vitae
								voluptas. Quibusdam, distinctio quia! Aspernatur asperiores
								voluptatibus odit nemo, necessitatibus maxime.
							</p>
						</Post>
					</li>
				</PostsList>
			</PostsComponent>
		</div>
	)
}
