import GistItem from './GistItem.js';
import PubSub from 'pubsub-js';
import React from 'react';

class GistList extends React.Component {

	constructor() {
		super();
		this.state = {
			username: "",
			users: null
		}
	}

	componentDidMount() {
		PubSub.subscribe('search', (msg, username) => {
			this.setState({
				username
			});

			fetch(`https://api.github.com/search/users?q=${username}`)
				.then(response => {
					response.json().then(result => {
						// handle result
						console.log(result);
						this.setState({
							users: result.items
						});
					})
				})
				.catch(e => {
					// handle error

				})
		});
	}

	render() {
		if (!this.state.users) {
			return(<h2>Enter username to search</h2>);
		} else {
			return (
				<div className="row">			
					{
						this.state.users.map((user, index) => 
							<GistItem user={user} key={index}></GistItem>
						)
					}	
				</div>
			);
		}
		
	}
}

export default GistList;

		