import './index.css';
import React, { PropTypes } from 'react';

class TodoHeader extends React.Component {

	// static propTypes = {
	// 	addTodo: PropTypes.func.isRequired
	// }

	handleKeyUp = event => {
		if (event.keyCode === 13) {
			let name = event.target.value.trim();

			if (name==="") {
				return
			}
			const todo = {
				isDone: false,
				name: name
			}
			this.props.addTodo(todo);

			event.target.value = "";
		}
	}

	render() {
		return (
			<div className="todo-header">
		        <input type="text" placeholder="New job (press Enter to add)" onKeyUp={this.handleKeyUp}/>
		    </div>
		);
	}
}

export default TodoHeader;

		