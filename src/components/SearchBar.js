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
			<h1 className='search-bar__heading'>Foogle</h1>
			<form onSubmit={handleSearch} className='search-bar__form'>
				<input
					type='text'
					onChange={handleInput}
					value={searchTerm}
					className='search-bar__input'
				/>
				<button className='search-bar__btn'>Search</button>
			</form>
		</div>
	)
}
