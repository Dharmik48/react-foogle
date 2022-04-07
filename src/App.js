import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import wikipedia from './apis/wikipedia'
import './styles.css'

export default function App() {
	const [searchResults, setSearchResults] = useState([])
	console.log(searchResults)
	const handleSearch = async searchTerm => {
		const results = await wikipedia.get('https://en.wikipedia.org/w/api.php', {
			params: {
				srsearch: searchTerm,
			},
		})
		const data = results.data.query.search || []
		setSearchResults(data)
	}

	return (
		<>
			<SearchBar search={handleSearch} />
			{SearchResults.length && <SearchResults data={searchResults} />}
		</>
	)
}
