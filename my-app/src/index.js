import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyComponent from './MyComponent';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


// var name = "World";
// var nameClass = "name";
// var nameVDOM = <span class={nameClass}>{name}</span>;
// var title = <div id="myTitle">Hello, {nameVDOM}</div>;
// ReactDOM.render(title, document.getElementById('root'));

// var names = ['sp1', 'sp2', 'sp3'];
// var vDom = 
// 	<ul>
// 		{
// 			names.map(name => <li>{name}</li>)
// 		}
// 	</ul>
// 	;
// ReactDOM.render(vDom, document.getElementById('root'));

ReactDOM.render(<MyComponent />, document.getElementById('root'));