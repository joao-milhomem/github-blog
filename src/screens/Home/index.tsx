import { Header } from '../../components/Header'
import { Post, PostsComponent, PostSearchForm, PostsList } from './style'
import Profile from '../../components/Profile'

export const Home = () => {
	return (
		<div>
			<Header />

			<Profile />

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
