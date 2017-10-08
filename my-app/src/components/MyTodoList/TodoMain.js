import './index.css';
import TodoItem from './TodoItem'
import React from 'react';

class TodoMain extends React.Component {


	render() {
		const todos = this.props.todos;

		return (
			<ul className="todo-main">
				{todos.map((todo, index) => <TodoItem key={index} index={index} todo={todo} {...this.props} />)}
			</ul>
		);
	}
}

export default TodoMain;

		