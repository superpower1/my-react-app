import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'; //引入样式只需要执行一次所以不需要得到返回的东西
// import App from './App';
// import MyComponent from './components/MyComponent/MyComponent';
// import Comment from './components/MyComments/Comment';
// import MyTodoList from './components/MyTodoList/MyTodoList';
import MyGist from './components/MyGist/MyGist';
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

let person = {
	name: 'Json',
	age: 20
};

// ReactDOM.render(<MyComponent name={person.name} age={person.age}/>, document.getElementById('root'));
// 可以用{...person}的写法将对象的所有属性通过props传进去
// ReactDOM.render(<MyComponent {...person}/>, document.getElementById('root'));


// ReactDOM.render(<Comment />, document.getElementById('root'));
ReactDOM.render(<MyGist />, document.getElementById('root'));