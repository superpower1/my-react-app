import React from 'react';

class MyRealtime extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			msg: ""
		}
	}

	update = event => {
		let msg = event.target.value;
		this.setState({
			msg
		});
	}

  render() {

    return (
    	<div>
    		<input type="text" onChange={this.update}/>
    		<p>{this.state.msg}</p>
    	</div>
    	);
  }
}

export default MyRealtime;