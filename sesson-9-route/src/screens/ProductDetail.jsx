/** @format */

import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const ProductDetail = () => {
	const [post, setPost] = useState();

	// const [searchParams] = useSearchParams();

	// const id = searchParams.get('id');

	const params = useParams();
	const { id, title } = params;

	useEffect(() => {
		if (id) {
			getPostDetail();
		}
	}, [id]);

	const getPostDetail = async () => {
		try {
			fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
				.then((response) => response.json())
				.then((json) => setPost(json));
		} catch (error) {
			console.log(error);
		}
	};

	return <div>{post && <h1>{post.title}</h1>}</div>;
};

export default ProductDetail;
