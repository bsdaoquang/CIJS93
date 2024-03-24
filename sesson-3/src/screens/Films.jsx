/** @format */

import React, { useEffect, useState } from 'react';
import { films } from '../data/films';
import { Input, List } from 'antd';

const Films = () => {
	const [dataFilms, setDataFilms] = useState([]);
	const [searchKey, setSearchKey] = useState('');
	const [results, setResults] = useState([]);

	useEffect(() => {
		getFilms();
	}, []);

	useEffect(() => {
		if (!searchKey) {
			setResults([]);
		} else {
			const items = dataFilms.filter((element) =>
				element.Title.toLowerCase().includes(searchKey)
			);

			setResults(items);
		}
	}, [searchKey]);

	const getFilms = () => {
		setDataFilms(films);
	};

	return (
		<div>
			<Input.Search
				value={searchKey}
				onChange={(val) => setSearchKey(val.target.value)}
				allowClear
				size='large'
				placeholder='Search'
			/>
			<List
				dataSource={searchKey ? results : dataFilms}
				renderItem={(item, index) => (
					<List.Item
						key={`film${index}`}
						extra={<img src={item.Images[0]} width={240} />}>
						<List.Item.Meta title={item.Title} description={item.Plot} />
					</List.Item>
				)}
			/>
		</div>
	);
};

export default Films;
