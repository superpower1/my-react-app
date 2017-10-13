import './index.css';
import React from 'react';

class TodoFooter extends React.Component {

	checkAll = () => {
		let isAllDone = !this.props.isAllDone;
		this.props.checkAll(isAllDone);
	}

	deleteDoneTodos = () => {
		this.props.deleteDoneTodos();
	}

	render() {
		const {doneCount, totalCount}  = this.props;

		let display = "none";
		if (doneCount != 0) {
			display = "block";
		}

		return (
			<div className="todo-footer">
		        <label>
		          <input type="checkbox" checked={this.props.isAllDone} onChange={this.checkAll}/>
		        </label>
		        <span>
		          <span>Done {doneCount}</span> / Total {totalCount}
		        </span>
		        <button className="btn btn-danger" onClick={this.deleteDoneTodos} style={{display:display}}>Clear All jobs</button>
		    </div>
		);
	}
}

export default TodoFooter;

		