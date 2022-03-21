import React from 'react'
import SearchResult from './SearchResult'

export default function SearchResults({ data }) {
	const renderList = data.map(result => {
		return <SearchResult data={result} />
	})

	return <ul>{renderList}</ul>
}
