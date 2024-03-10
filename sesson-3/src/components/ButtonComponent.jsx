/** @format */

import React from 'react';

const ButtonComponent = (props) => {
	const { text, onPress } = props;

	return (
		<button
			onClick={onPress}
			style={{
				border: 'none',
				padding: '10px 20px',
				borderRadius: 8,
				backgroundColor: '#e0e0e0',
				margin: 8,
				color: '#676767',
				fontSize: 18,
				fontWeight: 'Bold',
			}}>
			{text}
		</button>
	);
};

export default ButtonComponent;
