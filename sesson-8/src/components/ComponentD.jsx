/** @format */

import React from 'react';
import { useContext } from 'react';
import ThemeContext from '../context/context';

const ComponentD = () => {
	const themeCtx = useContext(ThemeContext);
	const { theme } = themeCtx;

	return (
		<div>
			<h1 style={{ color: theme === 'light' ? '#676767' : 'white' }}>
				Hello World!!!
			</h1>
		</div>
	);
};

export default ComponentD;
