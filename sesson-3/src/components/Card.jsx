/** @format */

import React from 'react';
import { ButtonComponent } from '../components';

const Card = (props) => {
	const { num1, num2, size, color, children } = props;

	console.log(num1 + num2);
	return (
		<div
			style={{
				backgroundColor: color,
				marginBottom: 12,
				border: '1px solid #212121',
			}}
			className='card'>
			{children}
			<h1>{num1 + num2}</h1>
			<ButtonComponent text='fafa' />
		</div>
	);
};

export default Card;
