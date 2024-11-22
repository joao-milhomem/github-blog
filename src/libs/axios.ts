import axios from 'axios'

export const GithubAPIs = {
	profileData: axios.create({
		baseURL: 'https://api.github.com/users',
	}),

	issues: axios.create({
		baseURL: 'https://api.github.com/search/issues',
	}),

	issueData: axios.create({
		baseURL: 'https://api.github.com/repos/joao-milhomem/github-blog/issues',
	}),
}
