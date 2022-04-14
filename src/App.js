import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import serpapi from './apis/serpapi'
import './styles.css'

export default function App() {
	const [searchResults, setSearchResults] = useState([])
	const handleSearch = async searchTerm => {
		const results = await serpapi.get(
			'https://cors-get.herokuapp.com/https://serpapi.com/search',
			{
				params: {
					q: searchTerm,
				},
			}
		)
		console.log(results)
		setSearchResults(['Searching...'])
		const data = results.data.organic_results || []
		setSearchResults(data)
	}

	return (
		<>
			<SearchBar search={handleSearch} />
			{SearchResults.length && <SearchResults data={searchResults} />}
		</>
	)
}

// https://thingproxy.freeboard.io/fetch/
