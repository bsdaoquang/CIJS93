/** @format */

import React, { useState } from 'react';

const LoginScreen = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = () => {
		if (email && password) {
			localStorage.setItem('accesstoken', 'mindX');
		}
	};

	return (
		<div>
			<input
				type='text'
				value={email}
				onChange={(val) => setEmail(val.target.value)}
				name=''
				id=''
			/>
			<input
				type='text'
				value={password}
				onChange={(val) => setPassword(val.target.value)}
				name=''
				id=''
			/>
			<button onClick={handleLogin}>Login</button>
		</div>
	);
};

export default LoginScreen;
