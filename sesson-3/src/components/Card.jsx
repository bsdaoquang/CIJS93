/** @format */

import React from 'react';
import { ButtonComponent } from '../components';

const Card = (props) => {
	const { children } = props;
	return (
		<div
			className='shadow'
			style={{
				marginBottom: 12,
				padding: 12,
				borderRadius: 12,
				minHeight: 200,
				border: '1px solid #e0e0e0',
			}}>
			{children}
		</div>
	);
};

export default Card;
