/** @format */

import React from 'react';

const InputComponent = (props) => {
	const { prefix, onChange } = props;

	return (
		<div className='row input'>
			{prefix}
			<input
				type='text'
				onChange={(val) => onChange(val.target.value)}
				name=''
				id=''
			/>
		</div>
	);
};

export default InputComponent;
