/** @format */

import React from 'react';

const ButtonComponent = (props) => {
	const { color, padding, text, onClick, borderRadius } = props;

	return (
		<button
			onClick={onClick}
			style={{
				backgroundColor: color,
				padding: padding,
				margin: 12,
				borderRadius,
				border: 'none',
				color: 'white',
			}}>
			{text}
		</button>
	);
};

export default ButtonComponent;
