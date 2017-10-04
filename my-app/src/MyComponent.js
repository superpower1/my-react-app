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
    return <h1>My component 2</h1>;
  }
}

export default MyComponent2;