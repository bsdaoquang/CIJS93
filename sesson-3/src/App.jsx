/** @format */

import React from 'react';
import Films from './screens/Films';
import './styles/globalStyles.css';
import { Layout } from 'antd';
import HeaderComponent from './components/HeaderComponent';

const { Sider, Content, Footer } = Layout;

function App() {
	return (
		<Layout>
			<HeaderComponent />
			<Layout>
				<Sider theme='light' collapsed />
				<Content>
					<div className='container'>
						<Films />
					</div>
				</Content>
			</Layout>
			<Footer />
		</Layout>
	);
}

export default App;
