/** @format */

import React, { useEffect, useState } from 'react';
import { films } from '../data/films';
import { Card, Input, List } from 'antd';

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
		<Card>
			<div className='row mt-4'>
				<div className='col-8 offset-2'>
					<Input.Search
						value={searchKey}
						onChange={(val) => setSearchKey(val.target.value)}
						allowClear
						size='large'
						placeholder='Search'
					/>
					<List
						pagination={{ align: 'center' }}
						dataSource={searchKey ? results : dataFilms}
						renderItem={(item, index) => (
							<List.Item key={`film${index}`}>
								<List.Item.Meta title={item.Title} description={item.Plot} />
							</List.Item>
						)}
					/>
				</div>
			</div>
		</Card>
	);
};

export default Films;
