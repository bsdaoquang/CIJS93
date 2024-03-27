/** @format */

import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Search = () => {
	const [searchParams] = useSearchParams();
	const q = searchParams.get('q');

	return <div>Search {q}</div>;
};

export default Search;
