/** @format */

import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const SettingsScreen = () => {
	// const [time, settime] = useState(3);

	const navigate = useNavigate();

	// useEffect(() => {
	// 	if (time >= 0) {
	// 		const timeout = setInterval(() => {
	// 			settime(time - 1);
	// 		}, 1000);

	// 		return () => clearInterval(timeout);
	// 	}
	// }, [time]);

	// useEffect(() => {
	// 	time === 0 && navigate('/');
	// }, [time]);

	return (
		<div>
			<Outlet />
			<Link to={'/settings/language'}>Language</Link>
			<Link to={'/settings/display'}>display</Link>
		</div>
	);
};

export default SettingsScreen;
