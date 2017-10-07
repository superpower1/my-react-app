import React from 'react';

class MyList extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			todos: ['eat', 'sleep', 'code']
		}
	}

	addTodo = event => {
		let todoInput = this.refs.todoInput.value;
		if (todoInput.trim() === '') {
			return;
		}

		let todos = this.state.todos;
		todos.unshift(todoInput);

		this.setState({
			todos
		});

		this.refs.todoInput.value = '';
	}

  render() {

    return (
    	<div>
    		<input type="text" ref="todoInput"/>
    		<button onClick={this.addTodo}>ADD</button>
    		<TodoList todos={this.state.todos}/>
    	</div>
    	);
  }
}

class TodoList extends React.Component {
	render() {
		return (
			<ul>
				{this.props.todos.map((todo, index) => <li key={index}>{todo}</li>)}
			</ul>
		);
	}
}

export default MyList;