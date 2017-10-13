import GistItem from './GistItem.js';
import PubSub from 'pubsub-js';
import React from 'react';

class GistList extends React.Component {

	componentDidMount() {
		PubSub.subscribe('search', (msg, username) => {
			console.log(username);
		});
	}

	render() {
		return (
			<div>
				<ul>

				</ul>
			</div>
		);
	}
}

export default GistList;

		