/** @format */

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginScreen from '../screens/LoginScreen';
import NotFount from '../screens/NotFount';

const AuthRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<LoginScreen />} />
				<Route path='*' element={<NotFount />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AuthRouter;
