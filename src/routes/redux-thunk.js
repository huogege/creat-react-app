import React,{useState, useEffect} from 'react'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import httpGet from '../utils/ajax'
const reducer = (state=0, action) => {
    console.log(state)
    switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
    }
}
  let store = createStore(reducer, applyMiddleware(thunk));
  //1.实现一个打印功能
  /**
   * redux-thunk 更多的是一种编程思想，而不是工具函数。
   */
//   let next = store.dispatch;
//   store.dispatch = function dispatchAndLog(action) {
//       console.log('dispatching', action)
//       next(action)
//       console.log('nextState', store.getState)
//   }


  //利用thunk实现一个异步dispatch
  //store.dispatch应该传一个对象，thunk中间件可以传入一个函数，从而实现各种副作用操作
  
const TheThunk = (props) => {
    const [state, setstate] = useState('')
    const asyncDispatchFetchAnswer = (param) =>{
        return (dispatch) => {
            httpGet('https://yesno.wtf/api').then(res => {
                dispatch({type:'INCREMENT'})
            })
        }
    }
    useEffect(() => {
        store.subscribe(() => setstate(Math.random()));   //强制组件刷新
    }, [])
    return(<div>
        {/* 获取更新后的state */}
        <p>{store.getState()}</p>   
        <button onClick={() => store.dispatch({type:'INCREMENT'})}>button</button>
        <button onClick={() => store.dispatch(asyncDispatchFetchAnswer('param'))}>async</button>
    </div>)
}
// 可以手动订阅更新，也可以事件绑定到视图层。

export default TheThunk;