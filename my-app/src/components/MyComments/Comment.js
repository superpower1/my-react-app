import React from 'react';
import AddComment from './AddComment';
import CommentList from './CommentList';

class Comment extends React.Component {
	render() {
		return (
			<div className="container">
				<AddComment />
				<CommentList />
			</div>
		);
	}
}

export default Comment;
 


		