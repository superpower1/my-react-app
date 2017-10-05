import React from 'react';

class MyComponent extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			isKilled: false
		}
	}

	handleClick = event => {
		this.setState({
			isKilled: !this.state.isKilled
		});
	}

  render() {

  	let text = this.state.isKilled ? 'Dead' : 'Alive'; 

    return (
    	<h2 onClick={this.handleClick}>{text}</h2>
    	);
  }
}

export default MyComponent;