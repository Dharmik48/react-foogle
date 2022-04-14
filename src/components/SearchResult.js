import React from 'react'

export default function SearchResult({ data }) {
	return (
		<li className='search__result'>
			<span className='search__display-link'>{data.displayed_link}</span>
			<a href={data.link} className='search__link'>
				<h3>{data.title}</h3>
			</a>
			<div className='search__desc'>
				<p>
					{data.snippet ? data.snippet : <em>Website has no descrition</em>}
				</p>
				<div className='search__desc__img'>
					{data.thumbnail && <img src={data.thumbnail} />}
				</div>
			</div>
		</li>
	)
}
