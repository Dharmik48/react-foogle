import axios from 'axios'

const KEY = '066b46185825750fcf5cc94c32ed896766a2ce3e5abc3b8f5443ffd122c9f645'

export default axios.create({
	baseURL: '/',
	params: {
		engine: 'google',
		api_key: KEY,
		num: 20,
		origin: 'https://localhost:3000',
		// action: 'query',
		// list: 'search',
		// format: 'json',
	},
})
