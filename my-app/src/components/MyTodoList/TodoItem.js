import './index.css';
import React from 'react';

class TodoItem extends React.Component {

	checkstatus = () => {
		// 这样可以一次取出多个props中的值
		const {updateTodo, todo} = this.props;
		todo.isDone = !todo.isDone;
		updateTodo();
	}

	deleteItem = () => {
		const {deleteTodo, todo, index} = this.props;
		if (window.confirm(`Are you sure to delete "${todo.name}" ?`)) {
			deleteTodo(index);
		}
	}

	enterHandler = () => {
		this.refs.item.style.backgroundColor = "#eee";
		this.refs.btn.style.display = "block";
	}

	leaveHandler = () => {
		this.refs.item.style.backgroundColor = "#fff";
		this.refs.btn.style.display = "none";
	}

	render() {
		const {name, isDone} = this.props.todo;
		return (
			<li onMouseEnter={this.enterHandler} onMouseLeave={this.leaveHandler} ref="item">
				<label>
					<input type="checkbox" checked={isDone} onChange={this.checkstatus}/>
					<span>{name}</span>
				</label>
				<button className="btn btn-danger" style={{display:"none"}} onClick={this.deleteItem} ref="btn">Delete</button>
			</li>
		);
	}
}

export default TodoItem;

		