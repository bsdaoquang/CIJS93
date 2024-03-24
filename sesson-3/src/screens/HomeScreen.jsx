/** @format */

import React, { useEffect, useState } from 'react';

const HomeScreen = () => {
	const [todos, setTodos] = useState([]);
	const [task, setTask] = useState('');
	const [count, setCount] = useState(0);

	useEffect(() => {
		// do something...
	}, []);

	useEffect(() => {
		if (count >= 5) {
			setTodos([]);
		} else {
			getTodos();
		}
	}, [count]);

	useEffect(() => {
		getTodos();
	}, [task]);

	const getTodos = () => {
		const res = localStorage.getItem('todos');

		if (res) {
			setTodos(JSON.parse(res));
		}
	};

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={() => setCount(count + 1)}>+</button>

			<button onClick={() => setCount(count - 1)}>-</button>
			<h1>Todo Lists</h1>
			<input
				type='text'
				value={task}
				onChange={(val) => setTask(val.target.value)}
				name=''
				id=''
			/>
			{todos.length > 0 &&
				todos.map((todo, index) => <li key={`todo${index}`}>{todo}</li>)}
		</div>
	);
};

export default HomeScreen;
