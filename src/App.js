import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import serpapi from './apis/serpapi'

export default function App() {
	const [searchResults, setSearchResults] = useState([])

	const handleSearch = async searchTerm => {
		const results = await serpapi.get('/search.json', {
			params: {
				q: searchTerm,
			},
		})
		setSearchResults(results.data['organic_results'])
	}

	return (
		<>
			<SearchBar search={handleSearch} />
			<SearchResults data={searchResults} />
		</>
	)
}
