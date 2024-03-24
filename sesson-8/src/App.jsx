/** @format */

import React, { useState } from 'react';
import HeaderComponent from './components/HeaderComponent';
import ComponentA from './components/ComponentA';
import ThemeContext from './context/context';

const App = () => {
	const [theme, setTheme] = useState('light');

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<div
				style={{
					backgroundColor: theme === 'light' ? 'white' : '#000',
					width: '100vw',
					height: '100vh',
				}}>
				<HeaderComponent />

				<ComponentA />
			</div>
		</ThemeContext.Provider>
	);
};

export default App;
