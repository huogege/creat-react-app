import React,{useState} from 'react'
import createStore from '../redux-write/redux-wirte'
import reducer from '../redux-write/reducer2'
const store = createStore(reducer);
store.subscribe(() => {      //可以在订阅函数去render或者setstate（）
    console.log('dispatched1')
})
store.subscribe(() => {
    console.log('dispatched2')
})
 const ReduxWirte = (props) => {
     const [state, setstate] = useState('')
     return(<div>
         <div>{store.getState().num}</div>
         <button onClick={() => {
             store.dispatch({type: 'add'})
             setstate(Math.random())
         }}>add</button>
         <button onClick={() => {
             store.dispatch({type: 'decrease'})
             setstate(Math.random())
         }}>decrease</button>
     </div>)
 }
  export default ReduxWirte