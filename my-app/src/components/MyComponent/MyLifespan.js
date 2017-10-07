import React from 'react';
import ReactDOM from 'react-dom';
/**
* 组件的3个声明周期：
* 1. Mount：插入真实DOM
* 2. Update：重新渲染
* 3. Unmount：移出真实DOM
*
* React为每个状态提供了两种hook（回调）函数，will在其之前，did在其之后
* 1. componentWillMount()
* 2. componentDidMount()
* 3. componentWillUpdate()
* 4. componentDidUpdate()
* 5. componentWillUnmount()
*/



class MyLifespan extends React.Component {

	constructor(props) {
		super(props);

		console.log("Initiate Component");

		this.state = {
			name: "sp1"
		};
	}

	componentWillMount() {
		console.log('componentWillMount');

		setTimeout(() => {
			this.setState({
				name: "sp2"
			})
		}, 3000);

	}
	componentDidMount() {
		console.log('componentDidMount');
	}
	componentWillUpdate() {
		console.log('componentWillUpdate');
	}
	componentDidUpdate() {
		console.log('componentDidUpdate');
	}
	componentWillUnmount() {
		console.log('componentWillUnmount');
	}

	delComp = event => {
		// document.getElementById('myname').removeChild(document.getElementById('title'));
		ReactDOM.unmountComponentAtNode(document.getElementById('root'));
	}

  render() {
  	console.log("Rendering");

    return (
    	<div>
    		<div id="myname">
    			<h2 id="title">{this.state.name}</h2>
    		</div>
    		<button onClick={this.delComp}>Delete Component</button>
    	</div>
    	);
  }
}

export default MyLifespan;