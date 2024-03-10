/** @format */

import React, { useState } from 'react';
import { ButtonComponent, Card } from '../components';

const TodoList = () => {
	const [tasks, setTasks] = useState([]);
	const [content, setContent] = useState('');

	const handleAddNewTask = () => {
		if (content) {
			const items = [...tasks];

			const data = {
				id: `${Date.now()}`,
				isCompleted: false,
				content,
				createdAt: Date.now(),
			};

			items.push(data);

			setTasks(items);

			setContent('');
		} else {
			alert('Content is required!!!');
		}
	};

	const handleClearTask = (id) => {
		const items = [...tasks];

		const index = tasks.findIndex((element) => element.id === id);
		if (index !== -1) {
			items.splice(index, 1);
		}

		setTasks(items);
	};

	return (
		<div style={{ width: '50%' }}>
			<Card>
				<div className='row'>
					<input
						placeholder='What do you want to do?'
						style={{ width: '80%' }}
						value={content}
						onChange={(val) => setContent(val.target.value)}
						type='text'
						name=''
						id=''
					/>
					<ButtonComponent onPress={handleAddNewTask} text={'Add'} />
				</div>

				{tasks.map((item, index) => (
					<div key={item.id} style={{ padding: '10px' }}>
						<div className='row'>
							<input
								type='checkbox'
								onClick={() => {
									const items = [...tasks];

									items[index].isCompleted = !items[index].isCompleted;

									setTasks(items);
								}}
								checked={item.isCompleted}
								name=''
								id=''
							/>
							<span
								style={{
									width: '100%',
									textDecorationLine: item.isCompleted
										? 'line-through'
										: 'none',
								}}>
								{item.content}
							</span>
							<button
								style={{ border: 'none' }}
								onClick={() => handleClearTask(item.id)}>
								X
							</button>
						</div>
					</div>
				))}
			</Card>
		</div>
	);
};

export default TodoList;
