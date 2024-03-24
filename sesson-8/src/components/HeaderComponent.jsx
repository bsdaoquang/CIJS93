/** @format */

import React from 'react';
import { useContext } from 'react';
import ThemeContext from '../context/context';

const HeaderComponent = () => {
	const themeCtx = useContext(ThemeContext);
	const { theme, setTheme } = themeCtx;

	return (
		<div>
			<p style={{ color: theme === 'light' ? '#676767' : 'white' }}>
				Theme: {theme}
			</p>
			<button onClick={() => setTheme('light')}>Light</button>
			<button onClick={() => setTheme('dark')}>Dark</button>
		</div>
	);
};

export default HeaderComponent;
