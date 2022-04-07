import axios from 'axios'

export default axios.create({
	baseURL: 'https://cors-anywhere.herokuapp.com/',
	params: {
		action: 'query',
		list: 'search',
		format: 'json',
	},
})
