

/**
 * 在类组件中，shouldcomponentupdate事件中，值的判断问题
 */
import React from "react";
class Son extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.numberObject.number == this.props.numberObject.number) {   //如果没有深拷贝数据，2个值其实都是同一个堆内存数据，永远相等
      return false;
    }
    return true;
  }
  render() {
    const { index, numberObject, handleClick } = this.props;
    //在每次渲染子组件时，打印该子组件的数字内容
    console.log(numberObject.number);
    return <h1 onClick={() => handleClick(index)}>{numberObject.number}</h1>;
  }
}
class Father extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberArray: [
        { number: 0 /*对象中其他的属性*/ },
        { number: 1 /*对象中其他的属性*/ },
        { number: 2 /*对象中其他的属性*/ },
      ],
    };
  }
  //点击后使numberArray中数组下标为index的数字值加一，重渲染对应的Son组件
  //在react中，当我们要对复杂类型数据做处理的时候，一定要深拷贝一份数据出来，然后将处理好的数据setstate。否在我们直接处理，会直接改变引用数据类型的值，
  //在shouldcomponengtupdate事件中，nextprops和thisprops，都会是同一个值，因为thisprops只是保存了一个指针，真正的值早已倍改变。
  handleClick = (index) => {
    let preNumberArray = this.state.numberArray;
    //这里对象深拷贝
    preNumberArray[index] = Object.assign({}, preNumberArray[index])

     preNumberArray[index].number +=1;
    this.setState({
      numberArray: preNumberArray,
    });
  };
  render() {
    return (
      <div style={{ margin: 30 }}>
        {this.state.numberArray.map((numberObject, key) => {
          return (
            <Son
              key={key}
              index={key}
              numberObject={numberObject}
              handleClick={this.handleClick}
            />
          );
        })}
      </div>
    );
  }
}
export default Father;
