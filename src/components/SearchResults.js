import React from 'react'
import SearchResult from './SearchResult'

export default function SearchResults({ data }) {
	if (data.length) {
		const renderList = data.map(result => (
			<SearchResult key={'' + result.position} data={result} />
		))
		return <ul className='search__results'>{renderList}</ul>
	}
	return null
}
