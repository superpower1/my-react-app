import React from 'react';
import MyState from './MyState';
import MyList from './MyList';

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

    // 组件内置的方法中的this指向组件对象，但是自定义的方法中的this没有定义，是null
    // 所以这里需要将指向组件的this绑定给自定义的方法handleClick()
    // this.handleClick = this.handleClick.bind(this); 
    // 由于handleClick使用了ES6的箭头函数所以不用写上面的语句了（箭头函数本身没有this，所以会去上一级作用域找，也就是会找到组件的this）
  }
  
  /* react中的事件是委托的方式处理的（委托给组件最外层的元素）*/

  handleClick = event => {
    var input = this.refs.msg;
    alert(input.value);

    // 这里event.target指的是button
    console.log(event.target.innerHTML);
  }

  render() {
    return (
      <div>
        <MyComponent2 />

        <ul>
          <li>name:{this.props.name}</li>
          <li>age:{this.props.age}</li>
        </ul>

        <input type="text" ref="msg" />
        <button onClick={this.handleClick}>Alert</button>

        <MyState />
        <MyList />
      </div>
      );
  }
}

// 指定默认属性
Person.defaultProps = {
  age: 18
}

// Person.propTypes = {
//   // 规定name属性为string类型，而且是必须的
//   name: React.PropTypes.string.isRequired,
//   age: React.PropTypes.number
// }

export default Person;