/** @format */

import React, { useState } from 'react';
import { ButtonComponent } from '../components';

const CalculatorScreen = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
			<h1>{count}</h1>
			<ButtonComponent text='+' onPress={() => setCount(count + 1)} />
			<ButtonComponent text='-' onPress={() => setCount(count - 1)} />
		</div>
	);
};

export default CalculatorScreen;
