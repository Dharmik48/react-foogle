import React from 'react'

export default function SearchResult({ data }) {
	return (
		<li key={data.position}>
			<div className='left'>
				<span>{data.displayed_link}</span>
				<a href={data.link}>
					<h3>{data.title}</h3>
				</a>
				<p>{data.snippet}</p>
			</div>
			{data.thumbnail && (
				<div className='right'>
					<img src={data.thumbnail} />
				</div>
			)}
		</li>
	)
}
