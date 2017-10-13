import PubSub from 'pubsub-js';
import React from 'react';

class GistSearch extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			inputStr: ""
		}
	}

	updateInput = (e) => {
		let inputStr = e.target.value;
		this.setState({ inputStr });
	}


	search = () => {
		let inputStr = this.state.inputStr.trim();

		if (inputStr==="") {
			return
		}

		PubSub.publish('search', inputStr);

		inputStr = "";
		this.setState({ inputStr });

	}

	render() {
		return (
			<div>
				<input type="text" placeholder="Search Gist with user name" onChange={this.updateInput} value={this.state.inputStr}/>
				<button onClick={this.search}>search</button>
			</div>
		);
	}
}

export default GistSearch;

		