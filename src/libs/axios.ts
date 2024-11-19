import axios from 'axios'

export const gitUserApi = axios.create({
	baseURL: 'https://api.github.com/users',
})

export const gitIssuesApi = axios.create({
	baseURL: 'https://api.github.com/search/issues',
})