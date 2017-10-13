import './index.css';
import React from 'react';

class GistItem extends React.Component {

	render() {
		let user = this.props.user;
		return (
			<div className="card">
		        <a href={user.html_url} target="_blank">
		          <img src={user.avatar_url} style={{width: 100+'px'}} />
		        </a>
		        <p className="card-text">{user.login}</p>
		    </div>
		);
	}
}

export default GistItem;

		