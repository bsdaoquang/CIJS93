/** @format */

import React, { useEffect, useState } from 'react';
import { films } from '../data/films';
import { List, Image, Input, Space, Button } from 'antd';

const { Search } = Input;

const HomeScreen = () => {
	const [data, setData] = useState(films);
	const [searchKey, setSearchKey] = useState('');
	const [yearsOfFilms, setYearsOfFilms] = useState([]);
	const [yearSelected, setYearSelected] = useState('');

	useEffect(() => {
		const items = [];

		films.forEach(
			(item) => !items.includes(item.Year) && items.push(item.Year)
		);

		setYearsOfFilms(items);
	}, []);

	useEffect(() => {
		if (!searchKey) {
			setData(films);
		} else {
			handleSearch();
		}
	}, [searchKey]);

	useEffect(() => {
		if (!yearSelected) {
			setData(films);
		} else {
			const items = films.filter((element) => element.Year === yearSelected);
			setData(items);
		}
	}, [yearSelected]);

	const handleSearch = () => {
		const items = data.filter((element) =>
			element.Title.toLowerCase().includes(searchKey)
		);
		setData(items);
	};

	return (
		<div>
			<Search
				placeholder='Search'
				allowClear
				value={searchKey}
				onPressEnter={handleSearch}
				onChange={(val) => setSearchKey(val.target.value)}
				onSearch={handleSearch}
				size='large'
			/>

			<Space style={{ margin: '20px 0' }}>
				{yearsOfFilms.map((item) => (
					<Button key={item} onClick={() => setYearSelected(item)}>
						{item}
					</Button>
				))}
				<Button onClick={() => setYearSelected('')} danger type='primary'>
					Clear
				</Button>
			</Space>

			<List
				dataSource={data}
				renderItem={(item, index) => (
					<List.Item
						key={`film${index}`}
						extra={<img src={item.Images[0]} width={277} />}>
						<List.Item.Meta title={item.Title} description={item.Actors} />
					</List.Item>
				)}
			/>
		</div>
	);
};

export default HomeScreen;
