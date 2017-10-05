import React, { Component } from 'react';
import logo from './logo.svg';

// 定义组件的方法
// 方式1：工厂函数（简单组件时使用）
function MyComponent1() {
  return <h1>My component 1</h1>;
}
// 方式2:ES6类语法（复杂组件时使用）
class MyComponent2 extends React.Component {
  render() { //重写父类的render方法
    console.log(this);
    return <h1>My component 2</h1>;
  }
}


class Person extends React.Component {

  constructor(props) {
    super(props);
    console.log(props); //查看所有属性
  }

  render() {
    return (
      <ul>
        <li>name:{this.props.name}</li>
        <li>age:{this.props.age}</li>
      </ul>
      );
  }
}

// 指定默认属性
Person.defaultProps = {
  age: 18
}

Person.propTypes = {
  // 规定name属性为string类型，而且是必须的
  name: React.PropTypes.string.isRequired,
  age: React.PropTypes.number
}

export default Person;