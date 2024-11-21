import { Header } from '../../components/Header'

export const Post = () => {
	return (
		<div>
			<Header />

			<section>
				<nav>
					<a href="/">Voltar</a>
					<a href="/post">Ver no github</a>
				</nav>

				<h1>JavaScript data types and data structures</h1>

				<footer>
					<span>User</span>
					<time dateTime="2022-01-01">há 1 semana</time>
					<span>5 comentários</span>
				</footer>
			</section>

			<main>
				<section>
					<p>
						Programming languages all have built-in data structures, but these
						often differ from one language to another. This article attempts to
						list the built-in data structures available in JavaScript and what
						properties they have. These can be used to build other data
						structures. Wherever possible, comparisons with other languages are
						drawn.
					</p>

					<p>
						<a href="123">Dynamic typing</a> <br />
						JavaScript is a loosely typed and dynamic language. Variables in
						JavaScript are not directly associated with any particular value
						type, and any variable can be assigned (and re-assigned) values of
						all types:
					</p>
				</section>

				<section>
					<pre>
						<code>
							let foo = 42;{'   '}// foo is now a number <br />
							foo = "bar"; {'   '}// foo is now a string <br />
							foo = true; {'   '}// foo is now a boolean <br />
						</code>
					</pre>
				</section>
			</main>
		</div>
	)
}
