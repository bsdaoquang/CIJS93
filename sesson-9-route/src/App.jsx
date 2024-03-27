/** @format */

import { useEffect, useState } from 'react';
import './App.css';
import AuthRouter from './routers/AuthRouter';
import MainRouter from './routers/MainRouter';

function App() {
	const [isLogin, setIsLogin] = useState(false);

	useEffect(() => {
		handleCheckLogin();
	}, []);

	const handleCheckLogin = () => {
		const res = localStorage.getItem('accesstoken');

		if (res && res === 'mindX') {
			setIsLogin(true);
		} else {
			setIsLogin(false);
		}
	};

	return !isLogin ? <AuthRouter /> : <MainRouter />;
}

export default App;
