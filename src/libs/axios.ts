import axios from 'axios'

// export const gitProfileDataAPI = axios.create({
// 	baseURL: 'https://api.github.com/users',
// })

// export const gitIssuesAPI = axios.create({
// 	baseURL: 'https://api.github.com/search/issues',
// })

// export const issueDataAPI = axios.create({
// 	baseURL: 'https://api.github.com/repos/joao-milhomem/github-blog/issues',
// })

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
