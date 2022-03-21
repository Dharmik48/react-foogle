import React, { useState } from 'react'

export default function SearchBar({ search }) {
	const [searchTerm, setSearchTerm] = useState('')

	const handleInput = e => {
		setSearchTerm(e.target.value)
	}

	const handleSearch = e => {
		e.preventDefault()
		try {
			search(searchTerm)
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<div className='search-bar'>
			<h1>Foogle</h1>
			<form onSubmit={handleSearch}>
				<input type='text' onChange={handleInput} value={searchTerm} />
				<button>Search</button>
			</form>
		</div>
	)
}
