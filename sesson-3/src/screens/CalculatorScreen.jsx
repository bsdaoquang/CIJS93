/** @format */

import React, { useState } from 'react';
import { ButtonComponent, Card } from '../components';

const CalculatorScreen = () => {
	const [number, setNumber] = useState('');
	const [pheptinh, setPheptinh] = useState('');

	const handleSaveFormular = (key) => setNumber(number + key);

	const handleCalc = () => {
		const nums = number.split(pheptinh);
	};

	return (
		<div style={{ width: '50%' }}>
			<Card>
				<div
					style={{
						padding: '10px 12px',
						alignItems: 'flex-end',
						justifyContent: 'flex-end',
						display: 'flex',
						backgroundColor: '#f3f3f3',
					}}>
					<h1 style={{ margin: 0 }}>{number ? number : '0'}</h1>
				</div>
				<div className=''>
					<ButtonComponent text={'0'} onPress={() => handleSaveFormular('0')} />
					<ButtonComponent text={'1'} onPress={() => handleSaveFormular('1')} />
					<ButtonComponent text={'2'} onPress={() => handleSaveFormular('2')} />
					<ButtonComponent text={'3'} onPress={() => handleSaveFormular('3')} />
					<ButtonComponent text={'4'} onPress={() => handleSaveFormular('4')} />
					<ButtonComponent text={'5'} onPress={() => handleSaveFormular('5')} />
					<ButtonComponent text={'6'} onPress={() => handleSaveFormular('6')} />
					<ButtonComponent text={'7'} onPress={() => handleSaveFormular('7')} />
					<ButtonComponent text={'8'} onPress={() => handleSaveFormular('8')} />
					<ButtonComponent text={'9'} onPress={() => handleSaveFormular('9')} />
				</div>
				<div className=''>
					<ButtonComponent
						text={'+'}
						onPress={() => {
							setPheptinh(' + ');
							handleSaveFormular(' + ');
						}}
					/>
					<ButtonComponent
						text={'-'}
						onPress={() => {
							setPheptinh(' - ');
							handleSaveFormular(' - ');
						}}
					/>
					<ButtonComponent
						text={'*'}
						onPress={() => handleSaveFormular(' * ')}
					/>
					<ButtonComponent
						text={'/'}
						onPress={() => handleSaveFormular(' / ')}
					/>
				</div>
				<ButtonComponent text={'='} onPress={handleCalc} />
				<ButtonComponent text={'C'} onPress={() => setNumber('')} />
			</Card>
		</div>
	);
};

export default CalculatorScreen;
