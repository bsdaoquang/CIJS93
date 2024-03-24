/** @format */

import { Affix, Layout } from 'antd';
import React from 'react';

const { Header } = Layout;

const HeaderComponent = () => {
	return (
		<Affix offsetTop={0}>
			<Header style={{ color: 'white' }}>Demo Mid Test</Header>
		</Affix>
	);
};

export default HeaderComponent;
