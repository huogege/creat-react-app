/**
 * 类组件和函数组件的更新问题
 */

import React,{useState, useEffect} from "react";
import { Button,InputItem } from 'antd-mobile';
import getJSON from '../utils/ajax'
window.onload = () => console.log('page onload')
document.ready = () => console.log('page ready')

const Child = (props) => {
    /**
     * 函数组件做了浅比较，不会更新没变的props,所谓浅比较，就是比较值和堆数据的引用值，如果是同样的数组和对象，则一样会更新组件，造成性能浪费。
     */
    console.log('fn-rendering')
    const [count, setcount] = useState(0);
    useEffect(() => {
        setTimeout(() => console.log('开始执行effet'), 1000)
        return () => {
            setTimeout(() => console.log('组件销毁了'), 3000)
        }
    }, [count])   //只有count改变的时候才会执行effect,effect永远在页面渲染之后执行
    return(<>
        <InputItem value={count} >count:</InputItem>
        <Button type="primary" onClick={() => {
           // setcount((preCount) => preCount + 1)
        }}>增加</Button>
    </>)
}

class Cpt2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    /**
     * 类组件不会主动判断props是否改变，从而决定是否更新组件。造成的结果是，所以的子组件都会更新，包括
     * 子组件中自动做了浅比较的函数组件。
     */
    console.log('class-rendering')   
    const { count } = this.state;
    return (
      <>
        <p>{count}</p>
        <button onClick={() => {
            this.setState({count:0})
        }}>+</button>
        <Child/>
      </>
    );
  }
}

export default Cpt2;