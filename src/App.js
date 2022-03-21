import React from 'react'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import serpapi from './apis/serpapi'
import axios from 'axios'

export default function App() {
	const handleSearch = async searchTerm => {
		const results = await serpapi.get('/search.json', {
			params: {
				q: searchTerm,
			},
		})
		console.log(results)
	}

	return (
		<>
			<SearchBar search={handleSearch} />
			<SearchResults />
		</>
	)
}
