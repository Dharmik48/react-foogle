import React from 'react'

export default function SearchResult({ data }) {
	return (
		<li className='search__result'>
			<div className='search__result-left'>
				<span className='search__display-link'>{data.displayed_link}</span>
				<a href={data.link} className='search__link'>
					<h3>{data.title}</h3>
				</a>
				<p className='search__desc'>{data.snippet}</p>
			</div>
			{data.thumbnail && (
				<div className='search__result-right'>
					<img src={data.thumbnail} />
				</div>
			)}
		</li>
	)
}
