import './index.css';
import React from 'react';

class TodoFooter extends React.Component {

	checkAll = () => {

	}

	deleteDoneTodos = () => {
		this.props.deleteDoneTodos();
	}

	render() {
		const {doneCount, totalCount}  = this.props;

		let isAllDone = false;
		
		if (doneCount === totalCount) {
			isAllDone = true;
		}

		let display = "block";
		return (
			<div className="todo-footer">
		        <label>
		          <input type="checkbox" checked={isAllDone} onChange={this.checkAll}/>
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

		