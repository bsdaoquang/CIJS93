/** @format */

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HomeScreen = () => {
	const [posts, setPosts] = useState([]);
	const [searchKey, setSearchKey] = useState('');

	const navigate = useNavigate();

	useEffect(() => {
		getPosts();
	}, []);

	const getPosts = async () => {
		try {
			fetch('https://jsonplaceholder.typicode.com/posts')
				.then((response) => response.json())
				.then((json) => setPosts(json));
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<input
				type='text'
				value={searchKey}
				onChange={(val) => setSearchKey(val.target.value)}
				name=''
				id=''
			/>

			<button onClick={() => navigate(`/search?q=${searchKey}&name=fafa`)}>
				Search
			</button>

			<ul>
				{posts.length > 0 &&
					posts.map((item) => (
						<div key={item.id}>
							<Link to={`/post-detail/${item.id}/${item.title}`}>
								<h2>{item.title}</h2>
							</Link>
							<p>{item.body}</p>
						</div>
					))}
			</ul>
		</div>
	);
};

export default HomeScreen;
