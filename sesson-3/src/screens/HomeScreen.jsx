/** @format */

import React, { useState } from 'react';
import { ButtonComponent } from '../components';

const HomeScreen = () => {
	const [profile, setProfile] = useState({
		name: '',
		age: 20,
		height: undefined,
	});

	// props, event, useState
	return (
		<div>
			<h1>{profile.name}</h1>
			<h2>{profile.age}</h2>

			<ButtonComponent text={profile.name} />

			<button
				onClick={() =>
					setProfile({
						...profile,
						name: 'fafafa',
					})
				}>
				Update profile
			</button>
		</div>
	);
};

export default HomeScreen;
