import React from 'react';
import TodoHeader from './TodoHeader';
import TodoMain from './TodoMain';
import TodoFooter from './TodoFooter';
import './index.css';

class MyTodoList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: [
				{
					isDone: false,
					name: "eat"
				},
				{
					isDone: false,
					name: "sleep"
				},
				{
					isDone: false,
					name: "code"
				}
			],
			isAllDone: false
		}
	}

	addTodo = todo => {
		let todos = this.state.todos;
		todos.unshift(todo);
		this.setState({todos, isAllDone:false});
	}

	updateTodo = () => {
		let totalCount = this.state.todos.length;
		let	doneCount = this.state.todos.filter((todo) => todo.isDone).length;
		let isAllDone = totalCount == doneCount;
		this.setState({
			todos: this.state.todos,
			isAllDone
		});
	}

	deleteTodo = index => {
		let todos = this.state.todos;
		todos.splice(index, 1);

		let totalCount = this.state.todos.length;
		let	doneCount = this.state.todos.filter((todo) => todo.isDone).length;
		let isAllDone = totalCount==doneCount && totalCount>0;

		this.setState({
			todos,
			isAllDone
		});
	}

	deleteDoneTodos = () => {
		// 得到所有isDone是false组成的数组，相当于删除了所有checked的todo
		let todos = this.state.todos.filter((todo) => !todo.isDone)
		this.setState({
			todos,
			isAllDone: false
		});
	}

	checkAll = (isAllDone) => {
		let todos = this.state.todos;
		todos.forEach((todo) => {
			todo.isDone = isAllDone;
		});
		this.setState({todos, isAllDone});
	}

	render() {

		// 将两个需要传给TodoMain的方法打包
		var mainProps = {
			todos: this.state.todos,
			updateTodo: this.updateTodo,
			deleteTodo: this.deleteTodo
		}

		var footerProps = {
			totalCount: this.state.todos.length,
			doneCount: this.state.todos.filter((todo) => todo.isDone).length,
			deleteDoneTodos: this.deleteDoneTodos,
			checkAll: this.checkAll,
			isAllDone: this.state.isAllDone
		}

		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<TodoHeader addTodo={this.addTodo}/>
					<TodoMain {...mainProps}/>
					<TodoFooter {...footerProps}/>
				</div>
			</div>
		);
	}
}

export default MyTodoList;

		