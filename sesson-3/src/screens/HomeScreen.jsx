/** @format */

import React, { useState } from 'react';
import { films } from '../data/films';
import { Avatar, Button, List } from 'antd';
import { FaHome } from 'react-icons/fa';

const HomeScreen = () => {
	const [yearSelected, setYearSelected] = useState('');

	// const [data, setData] = useState(
	// 	films.filter((element) => element.Metascore !== 'N/A')
	// );

	// const handleSort = (type) => {
	// 	const items = [...data];

	// 	items.sort((a, b) =>
	// 		type === 'ab'
	// 			? parseFloat(a.Metascore) - parseFloat(b.Metascore)
	// 			: parseFloat(b.Metascore) - parseFloat(a.Metascore)
	// 	);

	// 	setData(items);
	// };

	return (
		<div>
			{/* <span>
				Score: <button onClick={() => handleSort('ab')}>Nhỏ đến lớn</button>{' '}
				<button onClick={() => handleSort()}>Lớn đến nhỏ</button>
				<button
					onClick={() =>
						setData(films.filter((element) => element.Metascore !== 'N/A'))
					}>
					Clear
				</button>
			</span>

			<ul>
				{data.map((item, index) => (
					<li>
						<h2>
							{item.Title} {item.Metascore}
						</h2>
						<p>{item.Plot}</p>
						{item.Type === 'movie' ? 'Phim' : 'Playlist'}
					</li>
				))}
			</ul> */}

			{/* <h1>Movie</h1>

			<ul>
				{films.map(
					(item) =>
						item.Type === 'movie' && (
							<li>
								{item.Title} - {item.Type}
							</li>
						)
				)}
			</ul>

			<h1>Series</h1>

			<ul>
				{films
					.filter((element) => element.Type === 'series')
					.map((item) => (
						<li>
							{item.Title}
							{item.Type}
						</li>
					))}
			</ul> */}

			{films.map((item) => (
				<button onClick={() => setYearSelected(item.Year)}>{item.Year}</button>
			))}

			<ul>
				{films.map((item) =>
					yearSelected ? (
						yearSelected === item.Year && <li>{item.Title}</li>
					) : (
						<li>{item.Title}</li>
					)
				)}
			</ul>
		</div>
	);
};

export default HomeScreen;
