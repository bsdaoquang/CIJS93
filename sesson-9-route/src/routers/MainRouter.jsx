/** @format */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';
import NotFount from '../screens/NotFount';
import ProductDetail from '../screens/ProductDetail';
import Search from '../screens/Search';

const MainRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<HomeScreen />} />
				<Route path='/post-detail/:id/:title' element={<ProductDetail />} />
				<Route path='/search' element={<Search />} />
				<Route path='*' element={<NotFount />} />
			</Routes>
		</BrowserRouter>
	);
};

export default MainRouter;
